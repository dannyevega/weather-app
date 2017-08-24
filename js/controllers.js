// CONTROLLERS
weatherApp.controller('mainController', ['$scope', '$location', 'cityService',  function($scope, $location, cityService){
    
    $scope.city = cityService.city;
    
    $scope.$watch('city', function(){
       cityService.city = $scope.city; 
    });

    $scope.submit = function(){
        $location.path("/forecast");
    }
        
}]);

weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', function($scope, $resource, $routeParams, cityService){
    
    $scope.city = cityService.city;    
    
    $scope.days = $routeParams.days || '5';
    
    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=5e3f1215e6dc1f45f3eb32bb6087fbbb", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP"}});
    
    $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days });

    $scope.convertToDate = function(dt){
        return new Date(dt * 1000);
    }
    
    $scope.convertToFahrenheit = function(kelvin){
        return Math.round((1.8 * (kelvin - 273)) + 32);
    }    
    
}]);