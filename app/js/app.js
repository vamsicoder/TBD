	var app = angular.module("test_angular", ["app.controller", "ngRoute"]);
	
	// app.config(function($routeProvider) {
	// 	$routeProvider
	// 		.when("/", {
	// 			templateUrl: "forms/loginForm.html",
	// 			controller: "loginController"
	// 		})
	// 		.otherwise({
	// 			redirectTo: "/"
	// 		})
	// });

	app.config(function($locationProvider, $routeProvider) {
	  $locationProvider.html5Mode({
		  enabled: true,
		  requireBase: false
		});
	  $routeProvider
		.when("/", {
			templateUrl: "forms/loginForm.html",
			controller: "loginController"
		})
		.otherwise({
			redirectTo: "/"
		})
	});