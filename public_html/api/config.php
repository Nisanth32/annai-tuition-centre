<?php
/**
 * Annai Tuition Centre - PHP Backend Configuration
 * Compatible with Hostinger, Apache, LiteSpeed, and any standard PHP hosting (PHP 7.4 - 8.3+)
 */

// Error reporting: set to 0 in production
error_reporting(0);
ini_set('display_errors', '0');

// Session configuration
if (session_status() === PHP_SESSION_NONE) {
    ini_set('session.cookie_httponly', '1');
    ini_set('session.use_only_cookies', '1');
    ini_set('session.cookie_samesite', 'Lax');
    session_start();
}

// -------------------------------------------------------------
// Database Settings
// -------------------------------------------------------------
// By default, SQLite is used for zero-configuration instant setup.
// To use Hostinger MySQL instead, set DB_DRIVER to 'mysql' and fill in Hostinger DB details.
define('DB_DRIVER', 'sqlite'); // 'sqlite' or 'mysql'

// SQLite Path (automatically created in api/data/ folder)
define('SQLITE_FILE', __DIR__ . '/data/annai_tuition.sqlite');

// MySQL Settings (only if DB_DRIVER == 'mysql')
define('DB_HOST', 'localhost');
define('DB_NAME', 'u123456789_annai');
define('DB_USER', 'u123456789_admin');
define('DB_PASS', 'YourPasswordHere');

// -------------------------------------------------------------
// Admin Credentials
// -------------------------------------------------------------
define('ADMIN_USERNAME', 'admin');
// Default password: Admin@Annai2026 (change this anytime)
define('ADMIN_PASSWORD_HASH', password_hash('Admin@Annai2026', PASSWORD_DEFAULT));

// -------------------------------------------------------------
// Email Notifications (Hostinger mail() or SMTP)
// -------------------------------------------------------------
define('NOTIFICATION_EMAIL', 'annaituitioncentrepth@gmail.com');
define('FROM_EMAIL', 'noreply@annaituitioncentertrichy.com');

