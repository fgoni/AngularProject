angular.module('app.controllers', [])
  .controller('MyCtrl1', function($scope, $location, validateFactory, userFactory) {
    $scope.loginForm = {};
    $scope.user = userFactory.getUser();

    $scope.saveData = function() {
 		$scope.validate();
    };
    $scope.validate = function(){
    	validateFactory.validate($scope.loginForm, function(result){
    		$location.path("/logueado");
            userFactory.setUser($scope.loginForm);
    	}, function(result){
    		console.log("ERROR");
    	});
    };

  });