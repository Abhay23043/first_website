<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $feedback = htmlspecialchars($_POST["feedback"]);

    // Format feedback entry
    $entry = "Name: $name\nEmail: $email\nFeedback: $feedback\n-------------------------\n";

    // Save to file
    file_put_contents("feedback.txt", $entry, FILE_APPEND);

    // Redirect to thank you page
    header("Location: thankyou.html");
    exit();
}
?>
