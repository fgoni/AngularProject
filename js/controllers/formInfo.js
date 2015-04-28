angular.module('app.controllers', [])
  .controller('MyCtrl1', function($scope, validateFactory) {
    $scope.loginForm = {};
    $scope.saveData = function() {
 		$scope.validate();
    }
    $scope.validate = function(){
    	validateFactory.validate($scope.loginForm, function(result){
    		console.log(result);
    	}, function(result){
    		console.log("ERROR");
    	});
    }

  });