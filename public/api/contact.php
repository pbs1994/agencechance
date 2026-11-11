<?php
/**
 * Agence Chance — contact form handler (OVH shared hosting, PHP 8+).
 *
 * Policy: suspicious submissions are FLAGGED in the subject, never dropped,
 * and every lead is also appended to a log file outside the web root.
 *
 * Optional overrides live in a file that is NOT in git:
 *   ~/agencechance-config.php   (one level above www/, preferred)
 *   or www/api/config.php        (denied over HTTP by .htaccess)
 * returning e.g. ['to' => 'contact@agencechance.com', 'from' => 'site@agencechance.com', 'cc' => '']
 */

declare(strict_types=1);
header('Content-Type: application/json; charset=utf-8');
header('X-Robots-Tag: noindex');

$config = ['to' => 'contact@agencechance.com', 'from' => 'site@agencechance.com', 'cc' => ''];
foreach ([dirname(__DIR__, 2) . '/agencechance-config.php', __DIR__ . '/config.php'] as $file) {
    if (is_file($file)) {
        $extra = include $file;
        if (is_array($extra)) $config = array_merge($config, $extra);
        break;
    }
}

function out(bool $ok, int $code = 200): never {
    http_response_code($code);
    echo json_encode(['ok' => $ok]);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') out(false, 405);

$field = static function (string $k, int $max = 500): string {
    $v = trim((string)($_POST[$k] ?? ''));
    $v = str_replace(["\r", "\0"], '', $v);
    return mb_substr($v, 0, $max);
};

$lead = [
    'name'    => $field('name', 120),
    'email'   => $field('email', 160),
    'phone'   => $field('phone', 40),
    'date'    => $field('date', 60),
    'guests'  => $field('guests', 20),
    'place'   => $field('place', 120),
    'message' => $field('message', 4000),
    'lang'    => $field('lang', 5),
    'page'    => $field('page', 200),
];

if ($lead['name'] === '' || $lead['email'] === '') out(false, 422);

// ---- spam signals: flag, never drop
$flags = [];
if ($field('website') !== '') $flags[] = 'honeypot';
$elapsed = (int)$field('elapsed', 10);
if ($elapsed > 0 && $elapsed < 4) $flags[] = "fast:{$elapsed}s";
if (!filter_var($lead['email'], FILTER_VALIDATE_EMAIL)) $flags[] = 'bad-email';
if (preg_match_all('~https?://~i', $lead['message']) > 2) $flags[] = 'links';
if (($_POST['consent'] ?? '') !== '1') $flags[] = 'no-consent';

$prefix = $flags ? '[À VÉRIFIER: ' . implode(', ', $flags) . '] ' : '';
$subject = $prefix . 'Nouvelle demande — ' . $lead['name'] . ($lead['date'] ? ' — ' . $lead['date'] : '');

$labels = [
    'name' => 'Nom', 'email' => 'E-mail', 'phone' => 'Téléphone', 'date' => 'Date', 'guests' => 'Invités',
    'place' => 'Lieu / région', 'message' => 'Message', 'lang' => 'Langue', 'page' => 'Page',
];
$body = '';
foreach ($labels as $k => $label) {
    if ($lead[$k] !== '') $body .= str_pad($label . ':', 14) . $lead[$k] . "\n";
}
$body .= "\nIP: " . ($_SERVER['REMOTE_ADDR'] ?? '-') . "\nUA: " . mb_substr($_SERVER['HTTP_USER_AGENT'] ?? '-', 0, 200) . "\n";
if ($flags) $body .= 'Flags: ' . implode(', ', $flags) . "\n";

// ---- backup log (outside web root when possible)
$logLine = json_encode(['at' => date('c'), 'flags' => $flags] + $lead, JSON_UNESCAPED_UNICODE) . "\n";
$logFile = is_writable(dirname(__DIR__, 2)) ? dirname(__DIR__, 2) . '/agencechance-leads.log' : __DIR__ . '/leads.log';
@file_put_contents($logFile, $logLine, FILE_APPEND | LOCK_EX);

// ---- e-mail
$replyTo = filter_var($lead['email'], FILTER_VALIDATE_EMAIL) ? $lead['email'] : $config['to'];
$headers = [
    'From: Agence Chance <' . $config['from'] . '>',
    'Reply-To: ' . $replyTo,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
];
if (!empty($config['cc'])) $headers[] = 'Cc: ' . $config['cc'];

$sent = mail(
    $config['to'],
    '=?UTF-8?B?' . base64_encode($subject) . '?=',
    $body,
    implode("\r\n", $headers),
    '-f' . $config['from']
);

// The lead is logged even if mail() fails; tell the visitor the truth.
out($sent, $sent ? 200 : 500);
