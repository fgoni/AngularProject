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
  
  factory.exists = function(formInfo, callback, onError){
    $http.post('exists.php', formInfo)
    .success(callback)
    .error(onError);
  }
  factory.register = function(formInfo, callback, onError){
    $http.post('register.php', formInfo)
    .success(callback)
    .error(onError);
  }

  return factory;
});
