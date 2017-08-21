// DIRECTIVES
weatherApp.directive('weatherDisplay', function(){
    return {
        restrict: 'E',
        templateUrl: 'directives/weatherDisplay.html',
        replace: true,
        scope: {
            weatherObject: "=",
            convertToStandard: "&",
            convertToDate: "&",
            dateFormat: "@"
        }
    }
});