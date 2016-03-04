	app.controller("loginController", ["$scope","navigator", "servicecalls", function($scope, navigator, servicecalls) {		
		
		$scope.uname = "";
		$scope.pwd = '';

		function onlogin(res) {
			// Check for error handler
			$scope.resetLogin();

			if(res.data.length) {
				navigator.go("/diary");
			}
			else {
				alert("login error");
			}			
		}

		$scope.resetLogin = function() {
			$scope.uname = "";
			$scope.pwd = '';
		}

		$scope.login = function() {
			var uname = $scope.uname;
			var pwd = $scope.pwd;			
			// TODO: Need to validate inputs later		
			 if(uname.length && pwd.length) {	 
				servicecalls.requestService("login_user", {name: uname, password: pwd}).then(onlogin);
			}
		};

		$scope.signUp = function() {
			navigator.go("/signUp");
		}
	}]);

	app.controller("signUpController", ["$scope","navigator", "servicecalls", function($scope, navigator, servicecalls) {		
		$scope.uname = "";
		$scope.pwd = "";
		$scope.email = "";

		function onSignUp(res) {
			if(res.data.length) {
				alert("saved Succesfully");
				navigator.go("/diary");	
			} else {
				alert("Error occured");
			}			
		}

		$scope.register = function() {
			var uname = $scope.uname;
			var pwd = $scope.pwd;
			var emailID = $scope.email;
			// TODO: Need to validate inputs later
			if(uname.length && pwd.length && emailID.length) {			 
				servicecalls.requestService("add_user", {name: uname, password: pwd, email: emailID}).then(onSignUp);
			}
		};
	}]);

	app.controller("diaryController", function($scope) {
		function resetNote() {
			$scope.diary = "";
		}
		function saveNote() {

		}

		$scope.resetNote = resetNote;
		$scope.saveNote = saveNote;

		$scope.message = "Hiiii diary am back";
	}); 	                 
