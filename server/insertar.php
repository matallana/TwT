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

//$json = '{"nombreUsuariop": alan}';
//$data1 =json_decode($json);
//var_dump($data1);
//$data = $data1->nombreUsuariop;

// $data = $data1['nombreUsuariop'];

//print_r(postdata);
//print_r(data1);
//print_r(data);

//$datosclientes = json_decode($json, true);


// $nombreUsuario = mysqli_real_escape_string($con, $_POST['nombreUsuario']);
// $apellidoUsuario = mysqli_real_escape_string($con, $_POST['apellidoUsuario']);
// $emailUsuario = mysqli_real_escape_string($con, $_POST['emailUsuario']);
// //$avatarUsuario = mysqli_real_escape_string($con, $_POST['avatarUsuario']);
// $claveUsuario = mysqli_real_escape_string($con, $_POST['claveUsuario']);
//$fechaCreacion = mysqli_real_escape_string($con, $_POST['fechaCreacion']);
//$telefonoMovilUsuario = mysqli_real_escape_string($con, $_POST['telefonoMovilUsuario']); 
//$telefonoFijoUsuario = mysqli_real_escape_string($con, $_POST['telefonoFijoUsuario']);
//$user_perfil_idPerfil = mysqli_real_escape_string($con, $_POST['user_perfil_idPerfil']);










?>
