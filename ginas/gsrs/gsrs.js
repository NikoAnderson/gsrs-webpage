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
            })
    }])



