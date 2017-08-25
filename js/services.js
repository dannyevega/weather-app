// SERVICES
weatherApp.service('cityService', function(){
   
    this.city = "Oakland, Ca";
    
});

weatherApp.service('weatherService', ['$resource', function($resource){
    
    this.GetWeather = function(city, days){
        
        var weatherAPI = $resource("https://api.openweathermap.org/data/2.5/forecast/daily?APPID=5e3f1215e6dc1f45f3eb32bb6087fbbb", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP"}});

        return weatherAPI.get({ q: city, cnt: days });

    };
    
    
}]);
