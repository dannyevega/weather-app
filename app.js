// MODULE
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

// CONTROLLERS
weatherApp.controller('mainController', ['$scope', 'cityService', function($scope, cityService){
    
    $scope.city = cityService.city;
    
    $scope.$watch('city', function(){
       cityService.city = $scope.city; 
    });
        
}]);

weatherApp.controller('forecastController', ['$scope', '$resource', 'cityService', function($scope, $resource, cityService){
    
    $scope.city = cityService.city;    
    
    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=5e3f1215e6dc1f45f3eb32bb6087fbbb", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP"}});
    
    $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: 5 });
    
    console.log($scope.weatherResult);
    
}]);

// ROUTES
weatherApp.config(function($routeProvider){
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    
    .when('/forecast', {
        templateUrl: 'pages/forecast.html',
        controller: 'forecastController'
    })    
})

// SERVICES
weatherApp.service('cityService', function(){
   
    this.city = "Oakland, Ca";
    
});