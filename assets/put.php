<?php
$servername="localhost";
	$username="root";
	$password="";
	$database="codeinit";

	$con= mysqli_connect($servername,$username,$password,$database);


   $name=$_REQUEST['name'];
   $id = $_REQUEST['id'];
   $email=$_REQUEST['email'];
   $password=$_REQUEST['password'];
	$query = "update customapi set name ='$name',email='$email',password='$password' where id='$id'";

	$result=mysqli_query($con,$query);

	if($result === FALSE){
	    $message = array("status"=>"0","message"=>"fail");
	}
	else{
		$message = array("status"=>"1","message"=>"Passed");
	}

   echo json_encode($message);

?>