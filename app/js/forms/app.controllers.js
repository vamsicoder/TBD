	var app = angular.module("app.controller", []);

	app.controller("loginController", ["$scope", "$http", "$location", function($scope, $http, $location) {		
		$scope.uname = "";
		$scope.pwd = '';

		$scope.resetLogin = function() {
			$scope.uname = "";
			$scope.pwd = '';
		}

		$scope.login = function() {
			var uname = $scope.uname;
			var pwd = $scope.pwd;					
			 if(uname.length && pwd.length) {
			 	$http.post('https://diaryforme.herokuapp.com/api/users',  {name: uname, password: pwd}).then(function(res) {		
			 		alert("saved Succesfully");
					$scope.resetLogin();
					debugger;
					$location.path("/diary");

				});
			}
		};
	}]);

	app.controller("diaryController", function($scope) {
		$scope.message = "Hiiii diary am back";
	}); 	                 
