<?php
header('Content-type: application/json');

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");



$postdata = file_get_contents('php://input');
$dataraw = json_decode($postdata, true);

//kpi fecha....................................................
$fechaIngresot = $dataraw['fechaIngresot'];
$fechaTerminot = $dataraw['fechaTerminot'];

// //kpi tweeter...................................................
$followersTw = $dataraw['followersTw'];
$reachTw = $dataraw['reachTw'];
$impressionsTw = $dataraw['impressionsTw'];
$contribuidoresTw = $dataraw['contribuidoresTw'];
$generadosTw = $dataraw['generadosTw'];
$retweetsTw = $dataraw['retweetsTw'];
$repilesTw = $dataraw['repilesTw'];
$mentionsTw = $dataraw['mentionsTw'];


$con = mysqli_connect('localhost', 'root', '', 'desarrollo');
$queryinsert = "INSERT INTO guarda_datos_general (idGuardaDatosGeneral, followers, reach, impressions, tweettGenerados, retweets, respuestas, menciones, nombreTipoMedio, fechaInicio, fechaFinal) 
values ('', '','','', '', '', '$followersTw', '$reachTw', '$impressionsTw', '$contribuidoresTw', '$generadosTw', '$retweetsTw', '$repilesTw', '$mentionsTw', '', '', '', 'Red Social', '$fechaIngresot', '$fechaTerminot') ";  


if (!$con){
	die('No pudo conectarse: ' . mysql_error());
} else{
	$result = mysqli_query($con, $queryinsert);
	
}