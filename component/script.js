//se crea el modulo app
//var app = angular.module('main', ['ngRoute']);




//control registro
app.controller('dashboardCtrl', function($scope,$location, $http){

	//logout de dashboard
	$scope.goToLogout = function(){
		$location.path('/logout');
	};

	$scope.insertarUsuario = function(){
		
		$http({
			url: 'http://localhost/TwT/server/insertar.php',
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			 data: 'nombreUsuario='+$scope.nombreUsuario+'&apellidoUsuario='+$scope.apellidoUsuario+'&emailUsuario='+$scope.emailUsuario+'&claveUsuario='+$scope.claveUsuario
			}).then(function(response){
				alert("El usuario "+$scope.nombreUsuario+" fue registrado");
			},function(error){
				 alert("Ocurrio un error!, no pudo ser registrado");
				 console.error(error);
		   });

		   $location.path('/panel');
	};
   /* $scope.insertarUsuario = function(){
		$http.post('http://localhost/TwT/server/insertar.php', {'nombreUsuariop1':$scope.nombreUsuariop}).then(function(response){
			alert("El usuario fue registrado");
		},function(error){
			alert("Ocurrio un error!, no pudo ser registrado");
			console.error(error);

		});
	};*/
	
});



