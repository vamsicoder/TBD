
// All the routes for the app are configured here

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
	.when("/signUp", {
		templateUrl: "forms/signUpForm.html",
		controller: "signUpController"
	})
	.otherwise({
		redirectTo: "/"
	})
});