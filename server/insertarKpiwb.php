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
// $fansFb = $dataraw['fansFb'];
// $alcanceFb = $dataraw['alcanceFb'];
// $impresionesFb = $dataraw['impresionesFb'];
// $interaccionesFb = $dataraw['interaccionesFb'];
// $publicacionesFb = $dataraw['publicacionesFb'];
// //kpi tweeter...................................................
// $followersTw = $dataraw['followersTw'];
// $reachTw = $dataraw['reachTw'];
// $impressionsTw = $dataraw['impressionsTw'];
// $contribuidoresTw = $dataraw['contribuidoresTw'];
// $generadosTw = $dataraw['generadosTw'];
// $retweetsTw = $dataraw['retweetsTw'];
// $repilesTw = $dataraw['repilesTw'];
// $mentionsTw = $dataraw['mentionsTw'];
//Kpi web.......................................................
$visitasWb = $dataraw['visitasWb'];
$reboteWb = $dataraw['reboteWb'];
$permanenciaWb = $dataraw['permanenciaWb'];

$con = mysqli_connect('localhost', 'root', '', 'desarrollo');
$queryinsert = "INSERT INTO guarda_datos_general (idGuardaDatosGeneral, visitas, rebote, permanencia, nombreTipoMedio, fechaInicio, fechaFinal) 
values ('', '$visitasWb', '$reboteWb', '$permanenciaWb', 'Red Social', '$fechaIngreso', '$fechaTermino') ";  

if (!$con){
	die('No pudo conectarse: ' . mysql_error());
} else{
	$result = mysqli_query($con, $queryinsert);
	
}

// $queryinsert = "INSERT INTO usr_cliente (idCliente, nombreCliente, apellidoPCliente, apellidoMCliente, emailCliente, telefonoFijoCliente, telefonoMovilCliente, claveCliente, fechaCreacion, user_perfil_idPerfil) values ('', '$nombrecliente','$apellidocliente','$emailcliente', ' $telefonofijocliente','$telefonomovilcliente', '$clavecliente', '$fechacliente', '4') ";  










?>