// MODULE
var ntApp = angular.module('ntApp', ['restangular']);

// Restangular service that uses Heroku
/*
ntApp.factory('HerokuRestangular', function(Restangular) {
  return Restangular.withConfig(function(RestangularConfigurer) {
    RestangularConfigurer.setBaseUrl('http://cercanias-api.herokuapp.com/');
  });
});
*/

// CONTROLLERS
ntApp.controller('mainController', function ($scope, Restangular) {
    Restangular.setBaseUrl('http://cercanias-api.herokuapp.com/');
    $scope.cities = Restangular.all('city', {"format": "json"}).getList().$object;
});



