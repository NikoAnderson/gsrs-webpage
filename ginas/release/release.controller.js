angular.module('ginas')
.controller('releaseController',function($http,$scope,$location, $anchorScroll,versionFactory){
                    $scope.scrollTo = function (prmElementToScrollTo) {
                    	$anchorScroll.yOffset = 50;
                        $anchorScroll(prmElementToScrollTo);
                    };
                    $scope.release = versionFactory.getData()[0];
                    $scope.releases = versionFactory.getData();
                   // console.log($scope.release);
                    $scope.platform = window.navigator.platform;

                    $scope.parseDate = function (date) {
						  return new Date(Date.parse(date));
						} 

                    $scope.setRelease = function(verIndex){
                    	console.log(verIndex);
                    	$scope.release = versionFactory.getData()[verIndex];
                    }
                
})