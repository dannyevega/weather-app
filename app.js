// MODULE
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

// CONTROLLERS
weatherApp.controller('mainController', ['$scope', function(){
    
}]);

weatherApp.controller('forecastController', ['$scope', function(){
    
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