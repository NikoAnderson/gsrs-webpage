/**
 * Created by sheilstk on 4/29/16.
 */
'use strict';

angular.module('ginasWeb.gsrs', ['ui.router','jsonFormatter', 'ui.bootstrap', 'ngSanitize', 'swaggerUi'])
    .config(['$stateProvider','$urlRouterProvider', function ($stateProvider ,$urlRouterProvider) {
        $stateProvider
            .state('gsrs.main', {
                url: "/",
                templateUrl: './gsrs/gsrs.html',
                controller: function ($scope, faqFactory, $uibModal) {
                    $scope.faqs = faqFactory.getFaqs();
                    $scope.open = function (size) {
                        var modalInstance = $uibModal.open({
                            templateUrl: './gsrs/modal.html',
                            controller: 'ModalInstanceCtrl'
                        });
                    }
                }
            })
            .state('gsrs.release', {
                url: "/release",
                templateUrl: './gsrs/release.html',
                controller: function ($scope, $location, $anchorScroll, versionFactory) {
                    $scope.scrollTo = function (prmElementToScrollTo) {
                        $anchorScroll(prmElementToScrollTo);
                    };
                    $scope.release = versionFactory.getData()[0];
                    console.log($scope.release);
                    $scope.platform = window.navigator.platform;
                }
            })
            .state('gsrs.older', {
                url: "/older",
                templateUrl: './gsrs/older.html',
                controller: function ($scope, $location, $anchorScroll, versionFactory) {
                    $scope.scrollTo = function (prmElementToScrollTo) {
                        $anchorScroll(prmElementToScrollTo);
                    };
                    $scope.releases = versionFactory.getData();
                    $scope.platform = window.navigator.platform;
                }
            })
            .state('gsrs.data', {
                url: "/data",
                templateUrl: './gsrs/data.html'
            })
            .state('gsrs.faq', {
                url: "/faq",
                templateUrl: './gsrs/faq.html',
                controller: function ($scope, $location, $anchorScroll, faqFactory) {
                    $scope.faqs = faqFactory.getFaqs();
                    $scope.scrollTo = function (subject, index) {
                        console.log(subject);
                        console.log(index);
                        var prmElementToScrollTo;
                        if(index >= 0){
                            prmElementToScrollTo = subject+'-'+index;
                        }else{
                            prmElementToScrollTo= subject;
                        }
                        console.log(prmElementToScrollTo);
                        $anchorScroll(prmElementToScrollTo);
                    };

                    $scope.platform = window.navigator.platform;

                }
            }).state('gsrs.api', {
            url: "/api",
            templateUrl: './gsrs/api.html',
            controller: function ($scope, apiFactory, $http) {
                $scope.isLoading = false;
                $scope.url = $scope.swaggerUrl = 'https://tripod.nih.gov/ginas-swagger-ui/gsrs.json';

                $scope.myErrorHandler = function(message, code){
                    console.log(code);
                    console.log(message);
                };

            /*    $scope.calls = apiFactory.getCalls();
                
                $scope.makeCall = function(call){
                    $http.get(call.url, {cache: true}, {
                        headers: {
                            'Content-Type': 'text/plain'
                        }
                    }).then(function (response) {
                        _.set(call, 'results', response.data);
                    });
                }*/

            }
        })
    }])
    .controller('ModalInstanceCtrl', function ($scope, $uibModalInstance) {

        $scope.ok = function () {
            $uibModalInstance.close();
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    })
.directive('version', function () {
    return {
        templateUrl: "./gsrs/version.html",
        scope:{
            release: '='
        }
    };
}).directive('changelog', function () {
    return {
        templateUrl: "./gsrs/changelog.html",
        scope:{
            changes: '='
        }
    };
});

