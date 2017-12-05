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

// //kpi tweeter...................................................
$followersTw = $dataraw['followersTw'];
$reachTw = $dataraw['reachTw'];
$impressionsTw = $dataraw['impressionsTw'];
$contribuidoresTw = $dataraw['contribuidoresTw'];
$generadosTw = $dataraw['generadosTw'];
$retweetsTw = $dataraw['retweetsTw'];
$repliesTw = $dataraw['repliesTw'];
$mentionsTw = $dataraw['mentionsTw'];


$con = mysqli_connect('localhost', 'root', '', 'desarrollo');
$queryinsert = "INSERT INTO guarda_datos_general (idGuardaDatosGeneral, followers, reach, impressions, contribuidores, twettGenerados, retweets, respuestas, menciones, nombreTipoMedio, fechaInicio, fechaFinal) 
values ('', '$followersTw', '$reachTw', '$impressionsTw', '$contribuidoresTw', '$generadosTw', '$retweetsTw', '$repliesTw', '$mentionsTw', 'Red Social', '$fechaIngreso', '$fechaTermino') ";  


if (!$con){
	die('No pudo conectarse: ' . mysql_error());
} else{
	$result = mysqli_query($con, $queryinsert);
	
}