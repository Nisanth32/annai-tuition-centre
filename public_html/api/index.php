<?php
/**
 * Annai Tuition Centre - Single Entry REST API Router
 */

require_once __DIR__ . '/config.php';
require_once __DIR__ . '/db.php';

// Set response content type
header('Content-Type: application/json; charset=utf-8');

// Handle CORS
$origin = $_SERVER['HTTP_ORIGIN'] ?? '*';
header("Access-Control-Allow-Origin: $origin");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With, X-CSRFToken");

// Pre-flight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Ensure CSRF token in session
if (empty($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(16));
}

// Parse request URI path
$requestUri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

// Normalize path: strip script name or directory prefix if any
// Examples: /api/auth/login/ or /auth/login/ or /annai/api/auth/login/
$path = preg_replace('#^.*?/api/#', '/', $requestUri);
$path = preg_replace('#^/auth/#', '/auth/', $path);
$path = '/' . trim($path, '/') . '/';
if ($path === '//') $path = '/';

// Parse JSON Body
$rawInput = file_get_contents('php://input');
$jsonBody = json_decode($rawInput, true) ?? [];
$method = $_SERVER['REQUEST_METHOD'];

// Helper function: send JSON response
function jsonReply($data, $statusCode = 200) {
    http_response_code($statusCode);
    echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

// Helper function: check admin authentication
function requireAdminAuth() {
    if (empty($_SESSION['admin_authenticated']) || empty($_SESSION['admin_user'])) {
        jsonReply(['detail' => 'Authentication required.'], 401);
    }
}

$pdo = getDbConnection();

// ============================================================================
// ROUTING
// ============================================================================

// 1. Health Check
if ($path === '/health/') {
    jsonReply([
        'status' => 'healthy',
        'database' => 'connected',
        'driver' => DB_DRIVER,
        'server_time' => date('c')
    ]);
}

// 2. Courses List
if ($path === '/courses/') {
    $classes = ["Classes 1 - 8", "9th Standard", "10th Standard", "11th Standard", "12th Standard"];
    $list = array_map(function($c) {
        return [
            'name' => $c,
            'description' => 'Comprehensive coaching and regular assessment.',
            'subjects' => [],
            'availability' => 'Available across all branches'
        ];
    }, $classes);
    jsonReply($list);
}

// 3. Auth Endpoints
if ($path === '/auth/csrf/' && $method === 'GET') {
    setcookie('csrftoken', $_SESSION['csrf_token'], [
        'path' => '/',
        'httponly' => false,
        'samesite' => 'Lax'
    ]);
    jsonReply(['csrfToken' => $_SESSION['csrf_token']]);
}

if ($path === '/auth/login/' && $method === 'POST') {
    $username = trim($jsonBody['username'] ?? '');
    $password = $jsonBody['password'] ?? '';

    $stmt = $pdo->prepare("SELECT * FROM admin_users WHERE username = ? LIMIT 1");
    $stmt->execute([$username]);
    $admin = $stmt->fetch();

    if ($admin && password_verify($password, $admin['password_hash'])) {
        $_SESSION['admin_authenticated'] = true;
        $_SESSION['admin_user'] = $admin['username'];
        $_SESSION['csrf_token'] = bin2hex(random_bytes(16));

        setcookie('csrftoken', $_SESSION['csrf_token'], [
            'path' => '/',
            'httponly' => false,
            'samesite' => 'Lax'
        ]);

        jsonReply([
            'authenticated' => true,
            'username' => $admin['username'],
            'csrfToken' => $_SESSION['csrf_token']
        ]);
    } else {
        jsonReply(['detail' => 'Invalid administrator credentials.'], 401);
    }
}

if ($path === '/auth/me/' && $method === 'GET') {
    if (!empty($_SESSION['admin_authenticated']) && !empty($_SESSION['admin_user'])) {
        jsonReply([
            'authenticated' => true,
            'username' => $_SESSION['admin_user']
        ]);
    } else {
        jsonReply(['detail' => 'Authentication required.'], 401);
    }
}

if ($path === '/auth/logout/' && $method === 'POST') {
    $_SESSION = [];
    if (session_id()) session_destroy();
    setcookie('csrftoken', '', time() - 3600, '/');
    jsonReply(['authenticated' => false]);
}

// 4. Contact Enquiry (POST /contact/)
if ($path === '/contact/' && $method === 'POST') {
    $parentName = trim($jsonBody['parent_name'] ?? $jsonBody['name'] ?? '');
    $mobile = trim($jsonBody['mobile'] ?? '');
    $email = trim($jsonBody['email'] ?? '');
    $message = trim($jsonBody['message'] ?? '');

    if (empty($parentName) || empty($mobile)) {
        jsonReply(['detail' => 'Name and mobile number are required.'], 400);
    }

    $stmt = $pdo->prepare("INSERT INTO contact_enquiries (parent_name, mobile, email, message) VALUES (?, ?, ?, ?)");
    $stmt->execute([$parentName, $mobile, $email, $message]);

    // Send email notification
    $notificationSent = false;
    if (defined('NOTIFICATION_EMAIL') && NOTIFICATION_EMAIL) {
        $subject = "New Contact Enquiry - Annai Tuition Centre";
        $body = "New Enquiry Received:\n\nName: $parentName\nMobile: $mobile\nEmail: $email\nMessage:\n$message\n\nSubmitted at: " . date('Y-m-d H:i:s');
        $headers = "From: " . FROM_EMAIL . "\r\nReply-To: $email\r\nX-Mailer: PHP/" . phpversion();
        @mail(NOTIFICATION_EMAIL, $subject, $body, $headers);
        $notificationSent = true;
    }

    jsonReply(['saved' => true, 'notification_sent' => $notificationSent], 201);
}

// 5. Admissions Create (POST /admissions/)
if ($path === '/admissions/' && $method === 'POST') {
    $studentName = trim($jsonBody['student_name'] ?? '');
    $parentName = trim($jsonBody['parent_name'] ?? '');
    $parentMobile = trim($jsonBody['parent_mobile'] ?? '');
    $altMobile = trim($jsonBody['alternative_mobile'] ?? '');
    $email = trim($jsonBody['email'] ?? '');
    $currentClass = trim($jsonBody['current_class'] ?? '');
    $applyingClass = trim($jsonBody['applying_class'] ?? '');
    $schoolName = trim($jsonBody['school_name'] ?? '');
    $branch = trim($jsonBody['branch'] ?? '');
    $subjects = is_array($jsonBody['subjects'] ?? '') ? implode(', ', $jsonBody['subjects']) : trim($jsonBody['subjects'] ?? '');
    $preferredContact = trim($jsonBody['preferred_contact'] ?? 'Phone');
    $message = trim($jsonBody['message'] ?? '');
    $consent = !empty($jsonBody['consent']) ? 1 : 0;

    if (empty($studentName) || empty($parentMobile)) {
        jsonReply(['detail' => 'Student name and parent mobile are required.'], 400);
    }

    $reference = 'ATC-' . strtoupper(substr(bin2hex(random_bytes(5)), 0, 8));

    $sql = "INSERT INTO admissions 
        (reference, student_name, parent_name, parent_mobile, alternative_mobile, email, current_class, applying_class, school_name, branch, subjects, preferred_contact, message, consent, status) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'New')";
    
    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        $reference, $studentName, $parentName, $parentMobile, $altMobile, $email,
        $currentClass, $applyingClass, $schoolName, $branch, $subjects, $preferredContact,
        $message, $consent
    ]);

    // Send email notification
    if (defined('NOTIFICATION_EMAIL') && NOTIFICATION_EMAIL) {
        $subject = "New Admission Application: $reference ($studentName)";
        $body = "New Student Admission Application:\n\nReference: $reference\nStudent Name: $studentName\nParent Name: $parentName\nMobile: $parentMobile\nApplying Class: $applyingClass\nBranch: $branch\nSubjects: $subjects\nMessage: $message\n\nSubmitted at: " . date('Y-m-d H:i:s');
        $headers = "From: " . FROM_EMAIL . "\r\nX-Mailer: PHP/" . phpversion();
        @mail(NOTIFICATION_EMAIL, $subject, $body, $headers);
    }

    jsonReply([
        'reference' => $reference,
        'status' => 'New',
        'created_at' => date('c')
    ], 201);
}

// 6. Admin Admissions Metrics (GET /admin/admissions/metrics/)
if ($path === '/admin/admissions/metrics/' && $method === 'GET') {
    requireAdminAuth();

    $total = (int)$pdo->query("SELECT COUNT(*) FROM admissions")->fetchColumn();
    $new = (int)$pdo->query("SELECT COUNT(*) FROM admissions WHERE status = 'New'")->fetchColumn();
    $contacted = (int)$pdo->query("SELECT COUNT(*) FROM admissions WHERE status = 'Contacted'")->fetchColumn();
    $visit = (int)$pdo->query("SELECT COUNT(*) FROM admissions WHERE status = 'Visit Scheduled'")->fetchColumn();
    $admitted = (int)$pdo->query("SELECT COUNT(*) FROM admissions WHERE status = 'Admitted'")->fetchColumn();
    $rejected = (int)$pdo->query("SELECT COUNT(*) FROM admissions WHERE status = 'Rejected'")->fetchColumn();

    jsonReply([
        'total' => $total,
        'new' => $new,
        'contacted' => $contacted,
        'visit_scheduled' => $visit,
        'admitted' => $admitted,
        'rejected' => $rejected
    ]);
}

// 7. Admin Admissions List (GET /admin/admissions/)
if ($path === '/admin/admissions/' && $method === 'GET') {
    requireAdminAuth();

    $search = trim($_GET['search'] ?? '');
    $status = trim($_GET['status'] ?? '');
    $page = max(1, (int)($_GET['page'] ?? 1));
    $pageSize = max(1, min(100, (int)($_GET['page_size'] ?? 20)));
    $offset = ($page - 1) * $pageSize;

    $where = [];
    $params = [];

    if ($search !== '') {
        $where[] = "(student_name LIKE ? OR parent_name LIKE ? OR reference LIKE ? OR parent_mobile LIKE ?)";
        $searchTerm = "%$search%";
        $params[] = $searchTerm;
        $params[] = $searchTerm;
        $params[] = $searchTerm;
        $params[] = $searchTerm;
    }

    if ($status !== '') {
        $where[] = "status = ?";
        $params[] = $status;
    }

    $whereSql = count($where) ? "WHERE " . implode(" AND ", $where) : "";

    $countStmt = $pdo->prepare("SELECT COUNT(*) FROM admissions $whereSql");
    $countStmt->execute($params);
    $count = (int)$countStmt->fetchColumn();

    $stmt = $pdo->prepare("SELECT * FROM admissions $whereSql ORDER BY created_at DESC LIMIT $pageSize OFFSET $offset");
    $stmt->execute($params);
    $results = $stmt->fetchAll();

    jsonReply([
        'count' => $count,
        'page' => $page,
        'page_size' => $pageSize,
        'results' => $results
    ]);
}

// 8. Admin Single Admission & Status Update
if (preg_match('#^/admin/admissions/([^/]+)/(?:status/)?$#', $path, $matches)) {
    requireAdminAuth();
    $idOrRef = $matches[1];
    $isStatusUpdate = strpos($path, '/status/') !== false;

    if ($method === 'GET') {
        $stmt = $pdo->prepare("SELECT * FROM admissions WHERE id = ? OR reference = ? LIMIT 1");
        $stmt->execute([$idOrRef, $idOrRef]);
        $row = $stmt->fetch();
        if ($row) {
            jsonReply($row);
        } else {
            jsonReply(['detail' => 'Admission record not found.'], 404);
        }
    }

    if (($method === 'PATCH' || $method === 'POST') && $isStatusUpdate) {
        $newStatus = trim($jsonBody['status'] ?? '');
        $adminNotes = isset($jsonBody['admin_notes']) ? trim($jsonBody['admin_notes']) : null;

        if (empty($newStatus)) {
            jsonReply(['detail' => 'Status is required.'], 400);
        }

        if ($adminNotes !== null) {
            $update = $pdo->prepare("UPDATE admissions SET status = ?, admin_notes = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ? OR reference = ?");
            $update->execute([$newStatus, $adminNotes, $idOrRef, $idOrRef]);
        } else {
            $update = $pdo->prepare("UPDATE admissions SET status = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ? OR reference = ?");
            $update->execute([$newStatus, $idOrRef, $idOrRef]);
        }

        $stmt = $pdo->prepare("SELECT * FROM admissions WHERE id = ? OR reference = ? LIMIT 1");
        $stmt->execute([$idOrRef, $idOrRef]);
        jsonReply($stmt->fetch());
    }
}

// ============================================================================
// 9. FACULTY ATTENDANCE SYSTEM (Single-User Strict Login)
// ============================================================================
define('ATTENDANCE_USER_ID', 'S. Thiyagarajan');
define('ATTENDANCE_PASSWORD', 'S. Thiyagarajan123@$#');

function requireAttendanceAuth() {
    if (empty($_SESSION['attendance_authenticated']) || $_SESSION['attendance_user'] !== ATTENDANCE_USER_ID) {
        jsonReply(['detail' => 'Authentication required. Please log in with authorized credentials.'], 401);
    }
}

// Attendance Login
if ($path === '/attendance/login/' && $method === 'POST') {
    $username = trim($jsonBody['username'] ?? '');
    $password = (string)($jsonBody['password'] ?? '');

    if ($username === ATTENDANCE_USER_ID && $password === ATTENDANCE_PASSWORD) {
        $_SESSION['attendance_authenticated'] = true;
        $_SESSION['attendance_user'] = ATTENDANCE_USER_ID;
        jsonReply([
            'authenticated' => true,
            'username' => ATTENDANCE_USER_ID
        ]);
    } else {
        jsonReply(['detail' => 'Invalid User ID or Password. Access denied.'], 401);
    }
}

// Attendance Session Check
if ($path === '/attendance/me/' && $method === 'GET') {
    if (!empty($_SESSION['attendance_authenticated']) && $_SESSION['attendance_user'] === ATTENDANCE_USER_ID) {
        jsonReply([
            'authenticated' => true,
            'username' => ATTENDANCE_USER_ID
        ]);
    } else {
        jsonReply(['detail' => 'Authentication required.'], 401);
    }
}

// Attendance Logout
if ($path === '/attendance/logout/' && $method === 'POST') {
    unset($_SESSION['attendance_authenticated'], $_SESSION['attendance_user']);
    jsonReply(['authenticated' => false]);
}

// List Faculty + Attendance Percentages
if ($path === '/attendance/faculty/' && $method === 'GET') {
    requireAttendanceAuth();
    $start = trim($_GET['start'] ?? '');
    $end = trim($_GET['end'] ?? '');

    $faculty = $pdo->query("SELECT id, name, created_at FROM attendance_faculty ORDER BY id ASC")->fetchAll();

    foreach ($faculty as &$f) {
        $sql = "SELECT status FROM attendance_records WHERE faculty_id = ?";
        $params = [$f['id']];
        if ($start !== '' && $end !== '') {
            $sql .= " AND record_date >= ? AND record_date <= ?";
            $params[] = $start;
            $params[] = $end;
        }
        $rStmt = $pdo->prepare($sql);
        $rStmt->execute($params);
        $recs = $rStmt->fetchAll();

        $total = count($recs);
        $present = 0;
        $halfDay = 0;
        $absent = 0;

        foreach ($recs as $r) {
            if ($r['status'] === 'Present') $present++;
            elseif ($r['status'] === 'Half Day') $halfDay++;
            elseif ($r['status'] === 'Absent') $absent++;
        }

        $score = $present + ($halfDay * 0.5);
        $percentage = $total > 0 ? round(($score / $total) * 100, 1) : 0;

        $f['total_days'] = $total;
        $f['present_days'] = $present;
        $f['half_days'] = $halfDay;
        $f['absent_days'] = $absent;
        $f['percentage'] = $percentage;
    }

    jsonReply(['faculty' => $faculty]);
}

// Add New Faculty
if ($path === '/attendance/faculty/' && $method === 'POST') {
    requireAttendanceAuth();
    $name = trim($jsonBody['name'] ?? '');
    if ($name === '') {
        jsonReply(['detail' => 'Faculty name is required.'], 400);
    }

    $stmt = $pdo->prepare("INSERT INTO attendance_faculty (name) VALUES (?)");
    $stmt->execute([$name]);
    $newId = (int)$pdo->lastInsertId();

    jsonReply([
        'id' => $newId,
        'name' => $name,
        'total_days' => 0,
        'present_days' => 0,
        'half_days' => 0,
        'absent_days' => 0,
        'percentage' => 0
    ], 201);
}

// Remove Faculty (supports DELETE /attendance/faculty/{id}/ or POST /attendance/faculty/{id}/delete/)
if (preg_match('#^/attendance/faculty/(\d+)/(?:delete/)?$#', $path, $matches)) {
    requireAttendanceAuth();
    $facId = (int)$matches[1];

    if ($method === 'DELETE' || ($method === 'POST' && strpos($path, '/delete/') !== false)) {
        $pdo->prepare("DELETE FROM attendance_records WHERE faculty_id = ?")->execute([$facId]);
        $pdo->prepare("DELETE FROM attendance_faculty WHERE id = ?")->execute([$facId]);
        jsonReply(['deleted' => true, 'id' => $facId]);
    }
}

// Get Attendance Records (by date or date range)
if ($path === '/attendance/records/' && $method === 'GET') {
    requireAttendanceAuth();
    $date = trim($_GET['date'] ?? '');
    $start = trim($_GET['start'] ?? '');
    $end = trim($_GET['end'] ?? '');

    if ($date !== '') {
        $stmt = $pdo->prepare("SELECT faculty_id, record_date, status FROM attendance_records WHERE record_date = ?");
        $stmt->execute([$date]);
        jsonReply(['records' => $stmt->fetchAll()]);
    } elseif ($start !== '' && $end !== '') {
        $stmt = $pdo->prepare("SELECT r.faculty_id, f.name as faculty_name, r.record_date, r.status
            FROM attendance_records r
            JOIN attendance_faculty f ON f.id = r.faculty_id
            WHERE r.record_date >= ? AND r.record_date <= ?
            ORDER BY r.record_date ASC, f.id ASC");
        $stmt->execute([$start, $end]);
        jsonReply(['records' => $stmt->fetchAll()]);
    } else {
        $stmt = $pdo->query("SELECT r.faculty_id, f.name as faculty_name, r.record_date, r.status
            FROM attendance_records r
            JOIN attendance_faculty f ON f.id = r.faculty_id
            ORDER BY r.record_date DESC, f.id ASC");
        jsonReply(['records' => $stmt->fetchAll()]);
    }
}

// Save Attendance Records for a Date
if ($path === '/attendance/records/' && $method === 'POST') {
    requireAttendanceAuth();
    $date = trim($jsonBody['date'] ?? '');
    $records = $jsonBody['records'] ?? [];

    if ($date === '' || !is_array($records)) {
        jsonReply(['detail' => 'Valid date and records list are required.'], 400);
    }

    $allowedStatuses = ['Present', 'Absent', 'Half Day'];
    $pdo->beginTransaction();
    try {
        $delStmt = $pdo->prepare("DELETE FROM attendance_records WHERE faculty_id = ? AND record_date = ?");
        $insStmt = $pdo->prepare("INSERT INTO attendance_records (faculty_id, record_date, status) VALUES (?, ?, ?)");

        foreach ($records as $rec) {
            $facId = (int)($rec['faculty_id'] ?? 0);
            $status = trim($rec['status'] ?? '');
            if ($facId > 0 && in_array($status, $allowedStatuses, true)) {
                $delStmt->execute([$facId, $date]);
                $insStmt->execute([$facId, $date, $status]);
            }
        }
        $pdo->commit();
        jsonReply(['saved' => true, 'date' => $date]);
    } catch (Exception $e) {
        $pdo->rollBack();
        jsonReply(['detail' => 'Failed to save attendance records.'], 500);
    }
}

// Fallback: 404 Not Found
jsonReply(['detail' => 'Not found: ' . $path], 404);

