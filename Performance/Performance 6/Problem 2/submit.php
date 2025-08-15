<?php
require 'db.php';


$name = trim($_POST['name']);
$student_id = trim($_POST['student_id']);
$email = trim($_POST['email']);


if (strlen($name) < 4 || 
    !preg_match("/^\d{3}-\d{2}-\d{4}$/", $student_id) || 
    !preg_match("/^[a-z0-9._%+-]+@diu\.edu\.bd$/", $email)) {
  die("Invalid input.");
}


$stmt = $conn->prepare("INSERT INTO students (name, student_id, email) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $name, $student_id, $email);

if ($stmt->execute()) {
  echo "✅ Form submitted successfully!";
} else {
  echo "❌ Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
