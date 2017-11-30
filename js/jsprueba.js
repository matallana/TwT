
//se crea el modulo app
var app = angular.module('main', ['ngRoute']);


//Se configuran las rutas 

//creacion de servicios para login

//control registro
app.controller('registroCtrl', function($scope,$location, $http){


$scope.insertarprueba = function(){
		
    $('.botonExit').click(function() {
      var url = $(this).text();
      window.location.href = '/logout';
    });

$('.boton').click(function() {
     alert('hola');
    });

	       alert('hola mundo');
			// Damos el formato a nuestra data enviado al backend
			var FormData = {
				'nombrePerfil' : document.prueba.nombrePerfil.value,
				
			 };
			 var method = 'POST';
			 var url = 'http://localhost/TwT/component/insertarprueba.php';
			 // ----------------------------------------------------------------
	
			 //Ejecutamos el Http, usando las variables previamente definidas,
			$http({         
				url: url,
				method: method,
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				 data: FormData 
				}).
				then(function(response){
					console.dir(response) // aqui vez desde la consola como te llegan los datos
					$scope.objects = response.data
					alert("El usuario "+$scope.nombrePerfil+" fue registrado");
					console.log(response);
				},function(error){
					 alert("Ocurrio un error!, no pudo ser registrado");
					 console.error(error);
				});
				};        
			// ---------------------------------------------------------------------	

});



