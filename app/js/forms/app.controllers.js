	app.controller("loginController", ["$scope", "$http", "navigator",function($scope, $http, navigator) {		
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
					navigator.go("/diary");
				});
			}
		};
	}]);

	app.controller("diaryController", function($scope) {
		$scope.message = "Hiiii diary am back";
	}); 	                 
