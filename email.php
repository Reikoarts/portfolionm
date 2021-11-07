<?php 
$to = 'nathan.macaigne@hotmail.com';
$nom = $_GET['nom'];
$email = $_GET['email'];
$subject = $_GET['sujet'];
$message = $_GET['message'];
$headers = "From: webmaster@example.com" . "\r\n";

mail ( string $to , string $subject , string $message , array|string $additional_params = [] , string $additional_params = "" ) : bool
?>