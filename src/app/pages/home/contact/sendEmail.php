<?php

switch($_SERVER['REQUEST_METHOD']){
    case("OPTIONS"): //Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
    case("POST"): //Send the email;
        header("Access-Control-Allow-Origin: *");

        $json = file_get_contents('php://input');

        $params = json_decode($json);

        $email = $params->email;
        $name = $params->name;
        $phone = $params->phone;
        $company = $params->company;
        $message = $params->message;

        $recipient = 'rolandolloyd@gmail.com';
        $subject = 'Quote Request';
        $headers = "From: $name of $company. Phone#: $phone <$email>";

        mail($recipient, $subject, $headers, $message, $phone);
        break;
    default: //Reject any non POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}