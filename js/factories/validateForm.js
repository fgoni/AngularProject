angular.module('app.factories')
  .factory('validateFactory', function($http){
  var factory = {};
  this.user = {};

  factory.getAll = function(callback){
    $http.get('/api/v1/cities/all').success(callback);
  };

  factory.add = function(city,callback,onError){
    $http.post('/api/v1/cities',city)
      .success(callback)
      .error(onError);
  };

  factory.delete = function(city,callback){
    $http.delete('/api/v1/cities/' + city._id).success(callback);
  };

  factory.validate = function(formInfo, callback, onError){
    $http.post('validate.php', formInfo)
    .success(callback)
    .error(onError);
  };

  factory.setUser = function(user){
      this.user = user;
      console.log(this.user.username);
  }
  return factory;
});
