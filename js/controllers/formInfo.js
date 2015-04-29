angular.module('app.controllers', [])
  .controller('MyCtrl1', function($scope, $location, validateFactory, userFactory) {
    $scope.loginForm = {};
    $scope.registerForm = {};
    $scope.user = userFactory.getUser();

    $scope.login = function() {
 		$scope.validate();
    };
    $scope.validate = function(){
    	validateFactory.validate($scope.loginForm, function(data, status, header, config){
    		$location.path("/logueado");
            userFactory.setUser($scope.loginForm);
    	}, function(result){
    		console.log("ERROR");
    	});
    };

    $scope.register = function(){
        validateFactory.exists($scope.registerForm, function(data, status, header, config){
            console.log(data+" "+status+" "+header+" "+config);
            //console.log("Registration: "+validateFactory.register($scope.registerForm));
        }, function(data, status, header, config){
            console.log(data+" "+status+" "+header+" "+config);
            console.log("Error: ");
        });
    };

  });