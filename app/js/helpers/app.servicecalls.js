app.factory("servicecalls", ["$http", "applicationConsts", function($http, applicationConsts) {
	var _exports = {};

	function makeCall(service_name, params) {
		var service = applicationConsts.services[service_name];		
		return $http[service.method](service.url, params);
	}

	_exports.requestService = makeCall;
	return _exports; 
}]);