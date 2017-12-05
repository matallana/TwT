<?php

ini_set('display_errors', 'On');
error_reporting(E_ALL);

header('Content-type: application/json');

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

//se conecta a BDD
$con = mysqli_connect('localhost', 'root', '', 'desarrollo');



//Se recuperan los registros de la tabloa en BDD
$queryPerfil = "SELECT * FROM `usr_usuario`";


$resultado = $con->query("SELECT * FROM usr_usuario ");

// Se crea el array que almacenara los datos
$data = array();

// $data = [
//     Array('id' => 1, 'perfil' => 'admin'),
//     Array('id' => 2, 'perfil' => 'adminCM'),
//     Array('id' => 3, 'perfil' => 'CM')
    

// ];

// Se iteran los registros y se guardan en el array
$data = mysqli_fetch_all ($resultado, MYSQLI_ASSOC);

function utf8ize($d) { 
    if (is_array($d)) { 
        foreach ($d as $k => $v) { 
            $d[$k] = utf8ize($v); 
        } 
    } else 
    if (is_string ($d)) { 
        return utf8_encode($d); 
    } return $d; 
}


//Se transforma a formato Json
// echo json_encode($datos); 
echo json_encode(utf8ize($data));
?> 