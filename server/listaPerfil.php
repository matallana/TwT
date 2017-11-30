<?php
header('Content-type: application/json');

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

//se conecta a BDD
// $con = mysqli_connect('localhost', 'root', '', 'desarrollo');

//Se recuperan los registros de la tabloa en BDD
// $queryPerfil = "SELECT * FROM `usr_perfil`";

// $resultado = mysqli_query($con, $queryPerfil);

// $resultado = $con->query("SELECT * FROM usr_perfil");

// Se crea el array que almacenara los datos
$data = [
    Array('id' => 1, 'perfil' => 'admin'),
    

];

//Se iteran los registros y se guardan en el array
// while ($row = $resultado->mysql_fetch_assoc($datos)){
//     $datos[] = $row;
// }

if(isset($_POST['name'])) {
	array_push($data, Array('id' => 3, 'name' => $_POST['name']));
}

//Se transforma a formato Json
// echo json_encode($datos);
echo json_encode($data);
?> 