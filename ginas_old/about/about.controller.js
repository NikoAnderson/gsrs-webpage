angular.module('ginas')
.controller('aboutController',function($http,$scope,$location, $anchorScroll){
    $scope.scrollTo = function (prmElementToScrollTo) {
        $anchorScroll(prmElementToScrollTo);
    };
})
            