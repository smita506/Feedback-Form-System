<?php
$servername = "localhost";
$username = "root";
$password = "";
$db_name = "feedback";

// Connect to database
$conn = mysqli_connect($servername, $username, $password, $db_name);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get and sanitize user input
    $user = mysqli_real_escape_string($conn, $_POST["username"]);
    $email = mysqli_real_escape_string($conn, $_POST["email"]);
    $message = mysqli_real_escape_string($conn, $_POST["message"]);

    // Insert data
    $sql = "INSERT INTO greetings (username, email, message) VALUES ('$user', '$email', '$message')";

    if (mysqli_query($conn, $sql)) {
        echo "Data added successfully!";
    } else {
        echo "Something went wrong: " . mysqli_error($conn);
    }
} else {
    echo "Invalid request method.";
}

mysqli_close($conn);
?>
