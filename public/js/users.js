	var angularModule = angular.module('MyApp', []);

	angularModule.controller('MainController', function($scope, $http, $timeout) {
			
		$http.get("http://localhost:3000/usr/").then(function(response) {
			

			if (response.status == 200) {
				$scope.users = response.data;
				console.log("Response users ", $scope.users);
			}

		});
		


	$scope.createUser = function() {
	
	console.log(" DATA : ", palette);
	$http.post('/usr/', JSON.stringify(palette)).success(
			function(data) {
				
				$scope.palettes.push(data);
				
			}).error(function (error){
				
				$scope.palettes.push(data);
			});
}


	});