<?php
include('connect.php');
error_reporting(E_ALL);

$params = json_decode(file_get_contents('php://input'),true);

$sql = "INSERT INTO users (nombre, email, password) VALUES (:nombre, :email, :password);";

$q = $conn->prepare($sql);
$count = $q->execute(array(':nombre'=>$params['username'],
                  ':email'=>$params['email'],
                  ':password'=>$params['password']));

header('Content-Type: application/json');
echo json_encode(array('count' => $count));

?>