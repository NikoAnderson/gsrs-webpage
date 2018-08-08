angular.module('ginas')
.controller('faqsController',function($http,$scope,$location, $anchorScroll){
    $scope.scrollTo = function (prmElementToScrollTo) {
        $anchorScroll(prmElementToScrollTo);
    };
})
            