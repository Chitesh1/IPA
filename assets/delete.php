<?php

 $servername="localhost";
 $username="root";
 $password="";
 $database="codeinit";

 $con =mysqli_connect($servername,$username,$password,$database);

 $id=$_REQUEST['id'];

 $query="DELETE FROM `customapi` WHERE `customapi`.`id` = '$id'"; 

 $result=mysqli_query($con,$query);

 if($result === FALSE){
 	$message=array("status"=>"0","message"=>"Fail");
 }
  else{
  	$message=array("status"=>"1","message"=>"Succeed");
  }
  echo json_encode($message);
?>