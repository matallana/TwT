<?php
header('Content-type: application/json');

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");



$postdata = file_get_contents('php://input');
$dataraw = json_decode($postdata, true);

//kpi fecha....................................................
$fechaIngreso = $dataraw['fechaIngreso'];
$fechaTermino = $dataraw['fechaTermino'];
//kpi facebook.................................................
$fansFb = $dataraw['fansFb'];
$alcanceFb = $dataraw['alcanceFb'];
$impresionesFb = $dataraw['impresionesFb'];
$interaccionesFb = $dataraw['interaccionesFb'];
$publicacionesFb = $dataraw['publicacionesFb'];



$con = mysqli_connect('localhost', 'root', '', 'desarrollo');
$queryinsert = "INSERT INTO guarda_datos_general (idGuardaDatosGeneral, seguidores, alcance, impresiones, interacciones, publicaciones, nombreTipoMedio, fechaInicio, fechaFinal) 
values ('', '$fansFb','$alcanceFb','$impresionesFb', '$interaccionesFb', '$publicacionesFb', 'Red Social', '$fechaIngreso', '$fechaTermino') ";  

if (!$con){
	die('No pudo conectarse: ' . mysql_error());
} else{
	$result = mysqli_query($con, $queryinsert);
	
}