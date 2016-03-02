	app.controller("loginController", ["$scope","navigator", "servicecalls", function($scope, navigator, servicecalls) {		
		
		$scope.uname = "";
		$scope.pwd = '';

		function onloginSuccess(res) {
			alert("saved Succesfully");
			$scope.resetLogin();
			navigator.go("/diary");
		}

		function onError(res) {
		}

		$scope.resetLogin = function() {
			$scope.uname = "";
			$scope.pwd = '';
		}

		$scope.login = function() {
			var uname = $scope.uname;
			var pwd = $scope.pwd;					
			 if(uname.length && pwd.length) {			 
				servicecalls.requestService("add_user", {name: uname, password: pwd}).then(onloginSuccess, onError);
			}
		};
	}]);

	app.controller("diaryController", function($scope) {
		$scope.message = "Hiiii diary am back";
	}); 	                 
