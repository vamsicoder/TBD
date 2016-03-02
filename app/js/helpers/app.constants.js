app.factory("applicationConsts", ["$location", function($location) {
	var exports = {};
	var _baseUrl = window.URL;
	var _api = "/api";
	var _services = {};

	_services["add_user"] = {
		method: "post",
		url: _baseUrl + _api + "/users"
	};

	exports.services = _services;

	Object.freeze(exports);
	return exports;
}]);