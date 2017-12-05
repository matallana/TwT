<?php
header('Content-type: application/json');

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

//se conecta a BDD
$con = mysqli_connect('localhost', 'root', '', 'desarrollo');

//Se recuperan los registros de la tabloa en BDD
$queryPerfil = "SELECT * FROM `usr_cliente`";


$resultado = $con->query("SELECT * FROM usr_cliente");

// Se crea el array que almacenara los datos
$data = array();

// $data = [
//     Array('id' => 1, 'perfil' => 'admin'),
//     Array('id' => 2, 'perfil' => 'adminCM'),
//     Array('id' => 3, 'perfil' => 'CM')
    

// ];

// Se iteran los registros y se guardan en el array
$data = mysqli_fetch_all ($resultado, MYSQLI_ASSOC);




//Se transforma a formato Json
// echo json_encode($datos);
echo json_encode($data);
?> 