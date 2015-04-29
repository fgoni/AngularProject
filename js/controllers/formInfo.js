angular.module('app.controllers', [])
  .controller('MyCtrl1', function($scope, $location, validateFactory) {
    $scope.loginForm = {};
    $scope.saveData = function() {
 		$scope.validate();
    }
    $scope.validate = function(){
    	validateFactory.validate($scope.loginForm, function(result){
    		$location.path("/logueado");
    		validateFactory.setUser($scope.loginForm);
    		console.log(result);
    	}, function(result){
    		console.log("ERROR");
    	});
    }

  });