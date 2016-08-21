<?php
/**
 * Created by PhpStorm.
 * User: vadimka
 * Date: 12.8.2016
 * Time: 22:56
 */
$server = "localhost";
$database = "angular";
$password = "";

$con = mysqli_connect($server,"root",$password,$database);
if($con->connect_error)
{
    die("Connection failed: " . $con->connect_error);
}


$data = $con->query("SELECT id,name,gender,salary from tblEmployees");
//header('Content-Type: application/json');

$i =0;

while($result = $data->fetch_object())
{
  $arr[$i] = $result;
    $i++;
}
echo json_encode($arr);


