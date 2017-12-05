

//se crea el modulo app
var app = angular.module('main', ['ngRoute']);




//Se configuran las rutas 
app.config(function($routeProvider, $locationProvider){
	$routeProvider.when('/',{
		templateUrl: './component/login.html',
		controller: 'loginCtrl'
	}).when('/logout', {
		resolve: {
			deadResolve: function($location, user){
				user.clearData();
				$location.path('/login');
			}
		}
	})
	.when('/login', {
		templateUrl: './component/login.html',
		controller: 'loginCtrl'
	}).when('/dashboard', {
		resolve: {
		    check: function($location, user){
		    	if(!user.isUserLoggedIn()){
		    		$location.path('/login');
		        }
		    }
		},
		templateUrl:'./component/dashboard.html',
		controller: 'dashboardCtrl'

	}).when('/crear', {
		resolve: {
		    check: function($location, user){
		    	if(!user.isUserLoggedIn()){
		    		$location.path('/login');
		        }
		    }
		},
		templateUrl:'./component/formulariousuario.html',
		controller: 'dashboardCtrl'

	}).when('/agregar', {
		resolve: {
		    check: function($location, user){
		    	if(!user.isUserLoggedIn()){
		    		$location.path('/login');
		        }
		    }
		},
		templateUrl:'./component/formularioCliente.html',
		controller: 'dashboardCtrl'

	}).when('/agregarE', {
		resolve: {
		    check: function($location, user){
		    	if(!user.isUserLoggedIn()){
		    		$location.path('/login');
		        }
		    }
		},
		templateUrl:'./component/formularioEmpresa.html',
		controller: 'dashboardCtrl'

	}).when('/perfil',{
		resolve: {
		    check: function($location, user){
		    	if(!user.isUserLoggedIn()){
		    		$location.path('/login');
		        }
		    }
		},
		templateUrl: './component/perfil.html',
		controller: 'dashboardCtrl'
	}).when('/visualizarE',{
		resolve: {
		    check: function($location, user){
		    	if(!user.isUserLoggedIn()){
		    		$location.path('/login');
		        }
		    }
		},
		templateUrl: './component/empresas.html',
		controller: 'dashboardCtrl'
	}).when('/visualizarC',{
		resolve: {
		    check: function($location, user){
		    	if(!user.isUserLoggedIn()){
		    		$location.path('/login');
		        }
		    }
		},
		templateUrl: './component/clientes.html',
		controller: 'dashboardCtrl'
	}).when('/visualizarU',{
		resolve: {
		    check: function($location, user){
		    	if(!user.isUserLoggedIn()){
		    		$location.path('/login');
		        }
		    }
		},
		templateUrl: './component/usuarios.html',
		controller: 'dashboardCtrl'
	}).when('/ingresaKpi',{
		resolve: {
		    check: function($location, user){
		    	if(!user.isUserLoggedIn()){
		    		$location.path('/login');
		        }
		    }
		},
		templateUrl: './component/formularioKpi.html',
		controller: 'dashboardCtrl'
	}).otherwise({
		template: '404'
	});

	$locationProvider.html5Mode(true);
});




// script.js
    // create the module and name it demoApp
    // var demoApp = angular.module('demoApp', []);
	
		// create the controller and inject Angular's $scope
		app.controller('mainController', function($scope) {
	
			// create a message to display in our view
			$scope.message = 'Hello world!';
		});





//creacion de servicios para login
app.service('user', function(){
	var username;
	var loggedin = false;
	var id;

	this.getName = function(){
		return username;
	};

	this.setID = function(userID){
		id = userID;
	};
	this.getID = function(){
		return id;
	};

	this.isUserLoggedIn = function(){
		if(!!localStorage.getItem('login')){
			loggedin = true;
			var data = JSON.parse(localStorage.getItem('login'));
			username = data.username;
			id = data.id; 
		}
		return loggedin;
	};
	this.saveData = function(data){
		username = data.username;
		id = data.id;
		loggedin = true;
		localStorage.setItem('login', JSON.stringify({
			username: username,
			id: id
		}));

	};
	this.clearData = function(){
		localStorage.removeItem('login');
		username = "";
		id = "";
		loggedin = false;

	}
})

//se crean controladores 
app.controller('loginCtrl', function($scope,$http, $location, user){
	$scope.login= function(){
		var username = $scope.username;
		var password = $scope.password; 
		$http({
			url: 'http://localhost/TwT/server/server.php',
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			data: 'username='+username+'&password='+password
		}).then(function(response){
			if(response.data.status == 'loggedin'){
				user.saveData(response.data); 
				$location.path('/dashboard');
			} else {
				alert('invalid login');
			}
		})
	}
});




app.controller('dashboardCtrl', function($scope,$location, $http){

	//logout de dashboard
	$scope.goToLogout = function(){
		$location.path('/logout');
	};

	//Se traen las variables de perfiles para hacer combo-box
	// $scope.perfiles = function(){
	// 	$http({
	// 		method: 'get',
	// 		url: 'http://localhost/TwT/server/listaPerfil.php'
	// 	   }).then(function successCallback(response) {
	// 		// Store response data
	// 		$scope.selectPerfil = response.data;
	// 	   });
	// }

//-------------------------------------------------------------------------------------------------	
	//Funcion de insertar Usuario
	$scope.insertarUsuario = function(){
	

		// Damos el formato a nuestra data enviado al backend
		var FormData = {
			'nombreusuario' : document.formUsuario.nombreUsuario.value,
			'apellidousuario' : document.formUsuario.apellidoUsuario.value,
			'emailusuario' : document.formUsuario.emailUsuario.value,
			'claveusuario' : document.formUsuario.claveUsuario.value,
			'fecha' : document.formUsuario.fechaCreacion.value,
			'telfmovil' : document.formUsuario.telefonoMovilUsuario.value,
			'telffijo' : document.formUsuario.telefonoFijoUsuario.value,
			'selectPerfil' : document.formUsuario.eleccion.value
		};
		  var method = 'POST';
		  var url = 'http://localhost/TwT/server/insertar.php';
		  // ----------------------------------------------------------------

		  //Ejecutamos el Http, usando las variables previamente definidas,
		$http({			
			url: url,
			method: method,
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			 data:   FormData 
		}).
		then(function(response){
				console.dir(response) // aqui vez desde la consola como te llegan los datos
				$scope.objects = response.data
				alert("El usuario "+$scope.nombreUsuario+" fue registrado");
				console.log(response);
		},function(error){
				 alert("Ocurrio un error!, no pudo ser registrado");
				 console.error(error);
		});
	};
// ---------------------------------------------------------------------

	//Funcion de insertar Cliente
	$scope.insertarCliente = function(){
			
		
				// Damos el formato a nuestra data enviado al backend
		var FormData = {
					'nombreCliente' : document.formCliente.nombreCliente.value,
					'apellidoPCliente' : document.formCliente.apellidoPCliente.value,
					'apellidoMCliente' : document.formCliente.apellidoMCliente.value,
					'emailCliente' : document.formCliente.emailCliente.value,
					'telfmovilCliente' : document.formCliente.telefonoMovilCliente.value,
					'telffijoCliente' : document.formCliente.telefonoFijoCliente.value,
					'claveCliente' : document.formCliente.claveCliente.value,
					'fechaC' : document.formCliente.fechaCreacionC.value,
					'selectEmpresa' : document.formCliente.seleccion.value
										
		};
			var method = 'POST';
			var url = 'http://localhost/TwT/server/insertarCliente.php';
				  // ----------------------------------------------------------------
		
				  //Ejecutamos el Http, usando las variables previamente definidas,
		$http({			
					url: url,
					method: method,
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded'
					},
					 data:   FormData 
		}).
		then(function(response){
						console.dir(response) // aqui vez desde la consola como te llegan los datos
						$scope.objects = response.data
						alert("El usuario "+$scope.nombreCliente+" perteneciente a la empresa "+$scope.nombreEmpresa +" fue registrado");
						console.log(response);
		},function(error){
						 alert("Ocurrio un error!, no pudo ser registrado");
						 console.error(error);
		});
	};	
// ---------------------------------------------------------------------

	//Funcion insertar Empresa
	$scope.insertarEmpresa = function(){
		
	
			// Damos el formato a nuestra data enviado al backend
	var FormData = {
				'nombreEmpresa' : document.formEmpresa.nombreEmpresa.value,
				'fechaE' : document.formEmpresa.fechaCreacionE.value
	};
		var method = 'POST';
		var url = 'http://localhost/TwT/server/insertarEmpresa.php';
			  // ----------------------------------------------------------------
	
			  //Ejecutamos el Http, usando las variables previamente definidas,
	$http({			
				url: url,
				method: method,
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				 data:   FormData 
	}).
	then(function(response){
					console.dir(response) // aqui vez desde la consola como te llegan los datos
					$scope.objects = response.data
					alert("La Empresa "+$scope.nombreEmpresa+" fue registrada");
					console.log(response);
	},function(error){
					 alert("Ocurrio un error!, no pudo ser registrada");
					 console.error(error);
	});
};	

//-------------------------------------------------------------------------------
		//Funcion insertar Empresa
	$scope.insertarKpifb = function(){
		
	
			// Damos el formato a nuestra data enviado al backend
	
		console.log($scope.seleccionRd);
		var FormData = {
			//kpi fecha....................................................
			'fechaIngreso' : document.formFacebook.fechaIngreso.value,
			'fechaTermino' : document.formFacebook.fechaTermino.value,
			//kpi facebook.................................................
			'fansFb' : document.formFacebook.fansFb.value,
			'alcanceFb' : document.formFacebook.alcanceFb.value,
			'impresionesFb' : document.formFacebook.impresionesFb.value,
			'interaccionesFb' : document.formFacebook.interaccionesFb.value,
			'publicacionesFb' : document.formFacebook.publicacionesFb.value	
		};
		var method = 'POST';
		var url = 'http://localhost/TwT/server/insertarKpifb.php';
			  // ----------------------------------------------------------------
	
			  //Ejecutamos el Http, usando las variables previamente definidas,
		$http({			
				url: url,
				method: method,
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				 data:   FormData 
		}).
		then(function(response){
					console.dir(response) // aqui vez desde la consola como te llegan los datos
					$scope.objects = response.data
					alert("El Kpi fue registrado exitosamente");
					console.log(response);
		},function(error){
					 alert("Ocurrio un error!, no pudo ser ingresado");
					 console.error(error);
					 console.dir(response) // aqui vez desde la consola como te llegan los datos
					 $scope.objects = response.data
					 console.log(response);
		});
	};

	$scope.insertarKpitw = function(){
		console.log($scope.seleccionRd);
		var FormData = {
			//kpi fecha....................................................
			'fechaIngresot' : document.formTwitter.fechaIngresot.value,
			'fechaTerminot' : document.formTwitter.fechaTerminot.value,
		//kpi tweeter...................................................
			'followersTw' : document.formTwitter.followersTw.value,
			'reachTw' : document.formTwitter.reachTw.value,
			'impressionsTw' : document.formTwitter.impressionsTw.value,
			'contribuidoresTw' : document.formTwitter.contribuidoresTw.value,
			'generadosTw' : document.formTwitter.generadosTw.value,
			'retweetsTw' : document.formTwitter.retweetsTw.value,
			'repilesTw' : document.formTwitter.repilesTw.value,
			'mentionsTw' : document.formTwitter.mentionsTw.value
		};

		var method = 'POST';
		var url = 'http://localhost/TwT/server/insertarKpitw.php';
			  // ----------------------------------------------------------------
	
			  //Ejecutamos el Http, usando las variables previamente definidas,
		$http({			
				url: url,
				method: method,
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				 data:   FormData 
		}).
		then(function(response){
					console.dir(response) // aqui vez desde la consola como te llegan los datos
					$scope.objects = response.data
					alert("El Kpi fue registrado exitosamente");
					console.log(response);
		},function(error){
					 alert("Ocurrio un error!, no pudo ser ingresado");
					 console.error(error);
					 console.dir(response) // aqui vez desde la consola como te llegan los datos
					 $scope.objects = response.data
					 console.log(response);
		});
	};

	$scope.insertarKpiwb = function(){
		console.log($scope.seleccionRd);
		var FormData = {
			//kpi fecha....................................................
			'fechaIngreso' : document.formWeb.fechaIngreso.value,
			'fechaTermino' : document.formWeb.fechaTermino.value,
			//Kpi web.......................................................
		'visitasWb' : document.formWeb.visitasWb.value,
		'reboteWb' : document.formWeb.reboteWb.value,
		'permanenciaWb' : document.formWeb.permanenciaWb.value
		}

		var method = 'POST';
		var url = 'http://localhost/TwT/server/insertarKpiwb.php';
			  // ----------------------------------------------------------------
	
			  //Ejecutamos el Http, usando las variables previamente definidas,
		$http({			
				url: url,
				method: method,
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				 data:   FormData 
		}).
		then(function(response){
					console.dir(response) // aqui vez desde la consola como te llegan los datos
					$scope.objects = response.data
					alert("El Kpi fue registrado exitosamente");
					console.log(response);
		},function(error){
					 alert("Ocurrio un error!, no pudo ser ingresado");
					 console.error(error);
					 console.dir(response) // aqui vez desde la consola como te llegan los datos
					 $scope.objects = response.data
					 console.log(response);
		});
	};
	
});		

app.controller('userCtrl', ['$scope', '$http', function ($scope, $http) {
	$http({
	 method: 'get',
	 url: 'http://localhost/TwT/server/listaPerfil.php'
	}).then(function successCallback(response) {
	 // Store response data
	 $scope.users = response.data;
	});
}]);

app.controller('empresasCtrl', ['$scope', '$http', function ($scope, $http) {
	$http({
	 method: 'get',
	 url: 'http://localhost/TwT/server/listaEmpresa.php'
	}).then(function successCallback(response) {
	 // Store response data
	 $scope.users = response.data;
	});
}]);

app.controller('clientesCtrl', ['$scope', '$http', function ($scope, $http) {
	$http({
	 method: 'get',
	 url: 'http://localhost/TwT/server/listaClientes.php'
	}).then(function successCallback(response) {
	 // Store response data
	 $scope.users = response.data;
	});
}]);

app.controller('usuariosCtrl', ['$scope', '$http', function ($scope, $http) {
	$http({
	 method: 'get',
	 url: 'http://localhost/TwT/server/listaUsuarios.php'
	}).then(function successCallback(response) {
	 // Store response data
	 $scope.users = response.data;
	});
}]);
	





