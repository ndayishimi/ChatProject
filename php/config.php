<?php
$conn = mysqli_connect("localhost", "root", "", "chat");
if(!$conn){
	echo "database connected".mysqli_connect_error();
}
?>