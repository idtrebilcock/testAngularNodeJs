var angularModule = angular.module('MyApp', []);

angularModule.controller('MainController', function($scope, $http, $timeout) {
		
		//Get users
		$http.get("http://localhost:3000/usr/").then(function(response) {
			

			if (response.status == 200) {
				$scope.users = response.data;
				console.log("Response users ", $scope.users);
			}

		});


		//Create User
		$scope.createUser = function() {
		
			var user = {
					name : $scope.name,
					email: $scope.email,
					password: $scope.password,
				};
		console.log(" DATA : ", user);
		$http.post('http://localhost:3000/usr/', user).success(
				function(data) {
				
					//$scope.users.push(data.data.createdRecord);
					console.log("user created ", data);
				}).error(function (error){
					console.log("error creating user ", error);
				});
	}
	

});