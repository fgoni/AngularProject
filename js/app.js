angular.module('app.controllers', []);
angular.module('app.factories', []);

angular.module('app', [
  'ngRoute',
  'app.controllers',
  'app.factories'])
  .config(['$routeProvider',
    function($routeProvider){
      $routeProvider
      .when('/',{
         templateUrl:'partials/main.html',
         controller: 'MyCtrl1'
      })
      .when('/logueado', {
        templateUrl:'partials/logueado.html',
        controller: 'MyCtrl1'
      });
    }]);


