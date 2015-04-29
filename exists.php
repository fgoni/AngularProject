<?php
include('connect.php');
error_reporting(E_ALL);

$params = json_decode(file_get_contents('php://input'),true);
print_r($params);


$sql = "SELECT * FROM users WHERE nombre = '".$params['username']."';";
echo $sql;
$count = 0;

foreach($conn->query($sql) as $row) {
	$count++;
}
if ($count > 0)
		header("HTTP/1.0 200 '$count'");
else	header("HTTP/1.0 200 0");
?>