	var app = angular.module("test_angular", ["app.controller", "ngRoute"]);
	
	app.config(function($routeProvider) {
		$routeProvider
			.when("/", {
				templateUrl: "forms/loginForm.html",
				controller: "loginController"
			})
			.otherwise({
				redirectTo: "/"
			})
	})

