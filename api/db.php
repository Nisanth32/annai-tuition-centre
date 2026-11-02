<?php
/**
 * Database Connection & Migration Helper
 */

require_once __DIR__ . '/config.php';

function getDbConnection() {
    static $pdo = null;
    if ($pdo !== null) {
        return $pdo;
    }

    try {
        if (DB_DRIVER === 'mysql') {
            $dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=utf8mb4";
            $pdo = new PDO($dsn, DB_USER, DB_PASS, [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES => false,
            ]);
        } else {
            // SQLite
            $dir = dirname(SQLITE_FILE);
            if (!is_dir($dir)) {
                mkdir($dir, 0755, true);
            }
            $dsn = "sqlite:" . SQLITE_FILE;
            $pdo = new PDO($dsn, null, null, [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            ]);
            $pdo->exec("PRAGMA foreign_keys = ON;");
        }

        // Initialize tables if they do not exist
        initDatabaseTables($pdo);

        return $pdo;
    } catch (PDOException $e) {
        http_response_code(500);
        header('Content-Type: application/json');
        echo json_encode([
            'detail' => 'Database connection failed.',
            'error' => (defined('DEBUG') && DEBUG) ? $e->getMessage() : null
        ]);
        exit;
    }
}

function initDatabaseTables(PDO $pdo) {
    // 1. Admissions Table
    $pdo->exec("CREATE TABLE IF NOT EXISTS admissions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        reference VARCHAR(20) UNIQUE NOT NULL,
        student_name VARCHAR(150) NOT NULL,
        parent_name VARCHAR(150) NOT NULL,
        parent_mobile VARCHAR(20) NOT NULL,
        alternative_mobile VARCHAR(20) DEFAULT '',
        email VARCHAR(255) DEFAULT '',
        current_class VARCHAR(50) NOT NULL,
        applying_class VARCHAR(50) NOT NULL,
        school_name VARCHAR(200) DEFAULT '',
        branch VARCHAR(150) NOT NULL,
        subjects TEXT DEFAULT '',
        preferred_contact VARCHAR(20) DEFAULT '',
        message TEXT DEFAULT '',
        consent INTEGER DEFAULT 0,
        status VARCHAR(30) DEFAULT 'New',
        admin_notes TEXT DEFAULT '',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )");

    // 2. Contact Enquiries Table
    $pdo->exec("CREATE TABLE IF NOT EXISTS contact_enquiries (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        parent_name VARCHAR(150) NOT NULL,
        mobile VARCHAR(20) NOT NULL,
        email VARCHAR(255) DEFAULT '',
        message TEXT DEFAULT '',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )");

    // 3. Admin Users Table
    $pdo->exec("CREATE TABLE IF NOT EXISTS admin_users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username VARCHAR(100) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )");

    // Seed default admin if table is empty
    $stmt = $pdo->query("SELECT COUNT(*) as cnt FROM admin_users");
    $row = $stmt->fetch();
    if ($row && (int)$row['cnt'] === 0) {
        $insert = $pdo->prepare("INSERT INTO admin_users (username, password_hash) VALUES (?, ?)");
        $insert->execute([ADMIN_USERNAME, ADMIN_PASSWORD_HASH]);
    }
}

