<?php
try {
	$conn = new PDO('mysql:host=localhost;dbname=test;charset=utf8', 'root', '');
}

catch(PDOException $ex) {

}
?>