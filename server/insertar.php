<?php
header('Content-type: application/json');

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");



$postdata = file_get_contents('php://input');
$dataraw = json_decode($postdata, true);
$nombre = $dataraw['nombreusuario'];
$apellido = $dataraw['apellidousuario'];
$email = $dataraw['emailusuario'];
$clave = $dataraw['claveusuario'];
$fecha = $dataraw['fecha'];
$telfmovil = $dataraw['telfmovil'];
$telffijo = $dataraw['telffijo'];
	

$con = mysqli_connect('localhost', 'root', '', 'desarrollo');
$queryinsert = "INSERT INTO usr_usuarioOLD (idUsuario, nombreUsuario, apellidousuario, emaiUsuario, avatartUsuario, claveUsuario, fechaCreacion, telefonoMovil, telefonoFijo, user_perfil_idPerfil) values ('', '$nombre','$apellido','$email', ' ', '$clave', '$fecha', '$telfmovil', '$telffijo', '1') ";  

if (!$con){
	die('No pudo conectarse: ' . mysql_error());
} else{
	$result = mysqli_query($con, $queryinsert);
	
}

?>
