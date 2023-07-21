<?php
// Подключение библиотеки
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Получение данных
$json = file_get_contents('php://input'); // Получение json строки
$data = json_decode($json, true); // Преобразование json

// Данные
$name = $data['name'];
$phone = $data['phone'];
$email = $data['email'];

// Контент письма
$title = 'Заявка с сайта'; // Название письма
$body = '<p>Имя и Фамилия: <strong>'.$name.'</strong></p>'.
        '<p>Телефон: <strong>'.$phone.'</strong></p>'.
        '<p>Email: <strong>'.$email.'</strong></p>';

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
  $mail->isSMTP();
  $mail->CharSet = 'UTF-8';
  $mail->SMTPAuth   = true;

  // Настройки почты отправителя
  $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
  $mail->Username   = 'misavovk878@gmail.com'; // Логин на почте
  $mail->Password   = 'rowiblsgydgdsqdv'; // Пароль на почте
  $mail->SMTPSecure = 'ssl';
  $mail->Port       = 465;
  $auth => true 

  $mail->setFrom('misavovk878@gmail.com', 'Заявка с сайта'); // Адрес самой почты и имя отправителя

  // Получатель письма
  $mail->addAddress('misavovk878@gmail.com');

  // Отправка сообщения
  $mail->isHTML(true);
  $mail->Subject = $title;
  $mail->Body = $body;

  $mail->send('d');

  // Сообщение об успешной отправке
  echo ('Сообщение отправлено успешно!');

} catch (Exception $e) {
  header('HTTP/1.1 400 Bad Request');
  echo('Сообщение не было отправлено! Причина ошибки: {$mail->ErrorInfo}');
}
