angular.module('ginas')
.controller('aboutController',function($http,$scope,$location, $anchorScroll){
    $scope.scrollTo =  function (subject, index) {
        var prmElementToScrollTo;
        if(index >= 0){
            prmElementToScrollTo = subject+'-'+index;
        }else{
            prmElementToScrollTo= subject;
        }
        $anchorScroll.yOffset = 50;
        $anchorScroll(prmElementToScrollTo);
    };
})
            