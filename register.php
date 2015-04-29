<?php
include('connect.php');
error_reporting(E_ALL);

$params = json_decode(file_get_contents('php://input'),true);
print_r($params);


echo $sql = "INSERT INTO users ('nombre', 'email', 'password') VALUES (:nombre, :email, :password);";

$q = $conn->prepare($sql);
$count = $q->execute(array(':nombre'=>$params['username'],
                  ':email'=>$params['email'],
                  ':password'=>$params['password']));

if (!$count){
	header("HTTP/1.0 404 Not Found");
}

?>