angular.module('app.factories')
  .factory('userFactory', function($http){
  var factory = {};
  this.user = {};

  factory.setUser = function(user){
      this.user = user;
  }

  factory.getUser = function(){
    return this.user;
  }
  
  return factory;
});
