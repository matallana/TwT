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
	}).when('/panelprueba', {
		resolve: {
		    check: function($location, user){
		    	if(!user.isUserLoggedIn()){
		    		$location.path('/login');
		        }
		    }
		},
		templateUrl:'./component/panelprueba.html',
		controller: 'panelCtrl'

	}).when('/registro',{
		resolve: {
		    check: function($location, user){
		    	if(!user.isUserLoggedIn()){
		    		$location.path('/login');
		        }
		    }
		},
		templateUrl: './component/registro.html',
		controller: 'registroCtrl'
	}).when('/kpi',{
		resolve: {
		    check: function($location, user){
		    	if(!user.isUserLoggedIn()){
		    		$location.path('/login');
		        }
		    }
		},
		templateUrl: './component/kpi.html',
		controller: 'kpiCtrl'
	})
	.otherwise({
		template: '404'
	});

	$locationProvider.html5Mode(true);
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

//se crean controladores................................

//control login

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
				$location.path('/panelprueba');
			} else {
				alert('invalid login');
			}
		})
	}
});

//control panel
app.controller('panelCtrl', function($scope, $location, $http){
	//logout panel
	$scope.goToLogout = function(){
		$location.path('/logout');
	};
	
});


//control registro
app.controller('registroCtrl', function($scope,$location, $http){

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

app.controller('eleccionCtrl', function($scope){
	$scope.opciones = ['Administrador','CM Administrador','CM Usuario','CM cliente'];
});

app.controller('kpiCtrl', function($scope, $location, $html){

});

app.controller('usuarioCtrl', function($scope, user, $location){
	$scope.user = user.getName();
});




