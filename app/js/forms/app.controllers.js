	app.controller("loginController", ["$scope", "$http", "navigate",function($scope, $http, navigate) {		
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
					// $location.path("/diary");
					navigate.go("/diary");
					debugger;

				});
			}
		};
	}]);

	app.controller("diaryController", function($scope) {
		$scope.message = "Hiiii diary am back";
	}); 	                 
