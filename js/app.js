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

    $scope.selectedCity = {};
    $scope.selectedSrcSt = {};
    $scope.selectedDstSt = {};

    var baseCities = Restangular.all('city');

    /*
    $scope.cities = [
      {
        "nucleo_id": "0",
        "nucleo_name": "Elige tu ciudad"
      }
    ]
    */
    // This will query /cities and return a promise.
    baseCities.getList({"format": "json"}).then(function(cities) {
        $scope.cities = cities;
    });

    //$scope.cities = Restangular.all('city').getList({"format": "json"}).$object;
});
