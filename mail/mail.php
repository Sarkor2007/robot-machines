<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

$name = $_POST['name'];
$contacts = $_POST['contacts'];
if ($_POST['accept'] == "") {
    $accept = 'off';
} else {
    $accept = $_POST['accept'];
}


try {
    //Server settings
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                         //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'timurabdulvohidov@gmail.com';                     //SMTP username
    $mail->Password   = 'ucxelaworefdpgnb';                               //SMTP password
    $mail->SMTPSecure = 'ssl';                                  //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
    $mail->CharSet    = 'UTF-8';
    
    
    //Recipients
    $mail->setFrom('timurabdulvohidov@gmail.com', 'Заявка с сайта');
    $mail->addAddress('timurabdulvohidov@gmail.com', 'Администратор');     //Add a recipient


    

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = $title;
    $mail->Body    = "<div style=\"padding: 20px;\">
    <h2 style=\"text-align: center; \">Имя: $name</h2>
    <h3 style=\"text-align: center; font-weight: 600;\">Контакты: $contacts</h3>
    <p style=\"text-align: center; font-size: 20px;\">Согласие на обработку данныех: $accept</p>
    </div>";
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    header("Location: ../index.php");
    exit();
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}

