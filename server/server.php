<?php



header('Access-Control-Allow-Origin: *');
header('Content-type: application/json');

if(!isset($_POST)) die();

session_start();


$response = [];

 

$con = mysqli_connect('localhost', 'root', '', 'desarrollo');

//login.....
$username = mysqli_real_escape_string($con, $_POST['username']);
$password = mysqli_real_escape_string($con, $_POST['password']);

$query = "SELECT * FROM `usuarioprueba` WHERE emailUsuario = '$username' AND claveUsuario = '$password'"
;


$result = mysqli_query($con, $query);

if(mysqli_num_rows($result) > 0){
	$response['status'] = 'loggedin';
	$response['user'] = $username;
	$response['useruniqueid'] = md5(uniqid());
	$_SESSION['useruniqueid'] = $response['useruniqueid'];

}else {
	$response['status']= 'error';
}


echo json_encode($response);
