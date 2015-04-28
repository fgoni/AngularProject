<?php

error_reporting(E_ALL);

$params = json_decode(file_get_contents('php://input'),true);
print_r($params);
$enlace = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'root', '');

echo 'Conectado satisfactoriamente';
print_r($enlace);

echo $sql = "SELECT * FROM users WHERE nombre = '".$params['username']."' AND password = '".$params['password']."';";

$count = 0;

foreach($enlace->query($sql) as $row) {
	$count++;
}
if ($count <= 0){
	header("HTTP/1.0 404 Not Found");
}

?>