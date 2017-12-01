<?php
header('Content-type: application/json');

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");



$postdata = file_get_contents('php://input');
$dataraw = json_decode($postdata, true);
$nombreE = $dataraw['nombreEmpresa'];
$fechaE = $dataraw['fechaE'];

	

$con = mysqli_connect('localhost', 'root', '', 'desarrollo');
$queryinsertemp = "INSERT INTO empresa (idEmpresa, nombreEmpresa, fechaCreacionE) values ('', '$nombreE', '$fechaE') ";  

if (!$con){
	die('No pudo conectarse: ' . mysql_error());
} else{
	$result = mysqli_query($con, $queryinsertemp);
	
}

?>