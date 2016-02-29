	var app = angular.module("test_angular", ["app.controller", "ngRoute"]);
	
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
		.when("/diary", {
			templateUrl: "forms/diary.html",
			controller: "diaryController"
		})
		.otherwise({
			redirectTo: "/"
		})
	});