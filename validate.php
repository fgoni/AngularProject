<?php

include('connect.php');
error_reporting(E_ALL);

$params = json_decode(file_get_contents('php://input'),true);
print_r($params);


echo $sql = "SELECT * FROM users WHERE nombre = '".$params['username']."' AND password = '".$params['password']."';";

$count = 0;

foreach($conn->query($sql) as $row) {
	$count++;
}
if ($count <= 0){
	header("HTTP/1.0 404 Not Found");
}

?>