angular.module('ginas')
.controller('apiController',function ($scope, apiFactory, $http) {
                $scope.isLoading = false;
                $scope.url = $scope.swaggerUrl = 'https://tripod.nih.gov/ginas-swagger-ui/gsrs.json';

                $scope.myErrorHandler = function(message, code){
                    console.log(code);
                    console.log(message);
                };
})