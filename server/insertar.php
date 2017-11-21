<?php
/*  //$json='[{"nombreUsuariop":"jajaja"}]';

//$con = mysqli_connect('localhost', 'root', '', 'desarrollo');
var_dump($con);
$_POST[ = json_decode($nombreUsuariop, true);

header('Content-type: application/json');
header('Access-Control-Allow-Origin: *');
 






echo (info);

//Usuario......

$nombreUsuariopa = mysqli_real_escape_string($con, $_POST[-> nombreUsuariop);
//$claveUsuariop = mysqli_real_escape_string($con, $_POST[-> claveUsuariop);


$query = "INSERT INTO `usuarioprueba`(nombreUsuariop) values $'omb'eUsuariopa)";

if(mysqli_query($con, $query)){
	echo "inserto";
}else{
	echo 'Failed';
}*/

// header('Content-type: application/json');
$con = mysqli_connect('localhost', 'root', '', 'desarrollo');

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");



$postdata = file_get_contents('php://input');
$data1 = json_decode($postdata);
$data = $data1->nombreUsuariop;

//data

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


$queryinsert = "INSERT INTO usuarioprueba (nombreUsuario, apellidoUsuario, emailUsuario, claveUsuario)
values ('$nombreUsuario','$apellidoUsuario','$emailUsuario','$claveUsuario') ";  

$result = mysqli_query($con, $queryinsert);







?>
