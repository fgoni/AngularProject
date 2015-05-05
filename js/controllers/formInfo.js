angular.module('app.controllers', [])
  .controller('MyCtrl1', function($scope, $location, validateFactory, userFactory) {
    $scope.loginForm = {};
    $scope.registerForm = {};
    $scope.user = userFactory.getUser();

    $scope.login = function(formInfo) {
 		$scope.validate(formInfo);
    };
    $scope.validate = function(formInfo){
        if (formInfo != null){
            validateFactory.validate(formInfo, function(data, status, header, config){
                $location.path("/logueado");
                userFactory.setUser(formInfo);
            }, function(result){
                console.log("ERROR");
            });  
        }
        else {
            validateFactory.validate($scope.loginForm, function(data, status, header, config){
                $location.path("/logueado");
                userFactory.setUser($scope.loginForm);
            }, function(result){
                console.log("ERROR");
            });  
        }

    };

    $scope.register = function(){
        validateFactory.exists($scope.registerForm, function(data, status, header, config){
            console.log("Exists success: "+data+" "+data.count);
            //console.log("Registration: "+validateFactory.register($scope.registerForm));
            if (data.count === 0){
                validateFactory.register($scope.registerForm, function(data){
                    console.log("Register success: "+data.count);
                    if (data.count === 0) console.log("Registration failed");
                    else if (data.count > 0){
                        console.log("Registration success!");
                        console.log($);
                        $scope.login($scope.registerForm);
                    } 
                    else console.log("Unexpected error");
                }, function(data){
                    console.log("Error:" +data);
                });
            }
        }, function(data, status, header, config){
            console.log(data+" "+status+" "+header+" "+config);
            console.log("Error: ");
        });
    };

  });