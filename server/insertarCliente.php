<?php
header('Content-type: application/json');

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");



$postdata = file_get_contents('php://input');
$dataraw = json_decode($postdata, true);
$nombreC = $dataraw['nombreCliente'];
$apellidoPC = $dataraw['apellidoPCliente'];
$apellidoMC = $dataraw['apellidoMCliente'];
$emailC = $dataraw['emailCliente'];
$telfmovilC = $dataraw['telfmovilCliente'];
$telffijoC = $dataraw['telffijoCliente'];
$claveC = $dataraw['claveCliente'];
$fechaC = $dataraw['fechaC'];
$selectEmpresa = $dataraw['selectEmpresa'];

	

$con = mysqli_connect('localhost', 'root', '', 'desarrollo');
$queryinsertcliente = "INSERT INTO usr_cliente (idCliente, nombreCliente, apellidoPCliente, apellidoMCliente, emailCliente,  telefonoMovilCliente, telefonoFijoCliente, claveCliente, fechaCreacion, user_perfil_idPerfil, empresa_idempresa) values ('','$nombreC','$apellidoPC','$apellidoMC','$emailC' ,'$telfmovilC', '$telffijoC', '$claveC', '$fechaC','4','$selectEmpresa') ";  

if (!$con){
	die('No pudo conectarse: ' . mysql_error());
} else{
	$result = mysqli_query($con, $queryinsertcliente);
	
}

// $queryinsert = "INSERT INTO usr_cliente (idCliente, nombreCliente, apellidoPCliente, apellidoMCliente, emailCliente, telefonoFijoCliente, telefonoMovilCliente, claveCliente, fechaCreacion, user_perfil_idPerfil) values ('', '$nombrecliente','$apellidocliente','$emailcliente', ' $telefonofijocliente','$telefonomovilcliente', '$clavecliente', '$fechacliente', '4') ";  










?>
