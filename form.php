<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$from = 'From: Portfolio.com';
$to = 'jhall02258@gmail.com';
$subject = 'Email Inquiry';

$body = "From: $name\n E-mail: $email\n Message:\n $message";
?>

<?php
if ($_POST['submit']) {
    if(mail ($to, $subject, $body, $form)) {
    echo '<p>Thank you, you contact form has been submitted!</p>';
    } else {
    echo '<p>Oops! An error occurred. Try sending you message again.'
    }
}
?>