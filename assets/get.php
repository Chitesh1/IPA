<?php

	$servername="localhost";
	$username="root";
	$password="";
	$database="codeinit";

	$con= mysqli_connect($servername,$username,$password,$database);

	$query = "select * from customapi";

	$result=mysqli_query($con,$query);
 
   $data=array();
   while($row=mysqli_fetch_array($result)){
    
  $data[]= $row;
   
       } 
   if($result  === FALSE){
  	 $message=array("status"=>"0","message"=>"Fail");
    }
    else{
  	    $message=array("status"=>"1","message"=>"success");
         }

	  echo json_encode($data);
?>