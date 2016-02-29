	var app = angular.module("app.controller", []);

	app.controller("loginController", ["$scope", "$http", function($scope, $http) {		
		$scope.uname = "";
		$scope.pwd = '';

		$scope.resetLogin = function() {
			$scope.uname = "";
			$scope.pwd = '';

		}

		$scope.login = function() {
			debugger;		
			var uname = $scope.uname;
			var pwd = $scope.pwd;					
			 if(uname.length && pwd.length) {
			 	$http.post('http://localhost:3000/api/users ',  {name: uname, password: pwd}).then(function(res) {		
			 		alert("saved Succesfully") 		;
					$scope.resetLogin();
				});
			}
		};
	}]);
 	