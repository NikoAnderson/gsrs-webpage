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
                templateUrl: './ginas/releases.html',
                controller: 'releaseController'

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
                templateUrl: './faqs/faqs.html',
                controller: 'faqsController'
            })
    }])



