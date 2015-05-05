<?php
include('connect.php');
error_reporting(E_ALL);

$params = json_decode(file_get_contents('php://input'),true);

$sql = "SELECT * FROM users WHERE nombre = '".$params['username']."';";
$count = 0;

foreach($conn->query($sql) as $row) {
	$count++;
}

header('Content-Type: application/json');
echo json_encode(array('count' => $count));
?>