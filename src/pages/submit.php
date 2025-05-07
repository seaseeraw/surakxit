<?php
// Allow requests from React dev server (CORS)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");

// Read JSON input
$data = json_decode(file_get_contents("php://input"), true);

// DB connection
$conn = new mysqli("localhost", "root", "", "contact_form");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO submissions (email, password) VALUES (?, ?)");
$stmt->bind_param("sss", $data['email'], $data['password']);

if ($stmt->execute()) {
    echo "Form submitted successfully!";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>