/**
 * Created by sheilstk on 4/29/16.
 */
'use strict';

angular.module('ginasWeb.ginas', ['ui.router'])
    .config(['$stateProvider','$urlRouterProvider', function ($stateProvider ,$urlRouterProvider) {
        $stateProvider
            .state('ginas.about', {
                url: "/about",
                templateUrl: './ginas/about.html',
                controller: function ($scope, $location, $anchorScroll) {
                    $scope.scrollTo = function (prmElementToScrollTo) {
                        $anchorScroll(prmElementToScrollTo);
                    };
                }
            })
            .state('ginas.faq', {
                url: "/faqs",
                templateUrl: './ginas/faqs.html',
                controller: function ($scope, $location, $anchorScroll) {
                    $scope.faqs = [
                        {
                            subject: "",
                            questions: [
                                {
                                    question: 'What is ginas?',
                                    answer: '“ginas” (Global Ingredient Archival System) is the name of the collaborative international effort to realize a global mechanism for substance information exchange. Officially, the software produced by NIH/NCATS is called “G-SRS” (Global Substance Registration System). It is most correct to say that “G-SRS” is the “software to support the GINAS initiative”. Unofficially, “GINAS” is often used interchangeably with G-SRS to refer to the software. ' +
                                    'A major goal of the G-SRS software is to support the ISO 11238 requirements of the IDMP standard.'
                                }, {
                                    question: 'Will this system help to ensure that drugs and APIs are safer or help with shortages? ',
                                    answer: 'The primary use case driving IDMP adoption is that of pharmacovigilance. G-SRS is the first implementation of the substance information part of the IDMP standards (ISO 11238) ' +
                                    'and works with the other parts to support these efforts.'
                                }, {
                                    question: 'What is ISO IDMP?',
                                    answer: 'International Standards Organization: Identification of Medicinal Products (ISO:IDMP) is a set of five ISO standards for uniquely and unambiguously ' +
                                    'defining medicinal products and related information. ' +
                                    'One of the primary purposes of these standards is in international pharmacovigilance.'
                                }, {
                                    question: 'What is ISO 11238?',
                                    answer: 'ISO 11238 is the section of IDMP which deals with substances, and which was the inspiration for the data model and processes used by the ginas collaboration in the G-SRS software. ' +
                                    'A major goal of the G-SRS software is to support the ISO 11238 requirements of the IDMP standard.'
                                }]
                        }];
                }
            })

            .state('ginas.meetings', {
                url: "/meetings",
                templateUrl: './ginas/meetings.html'
            })
            .state('uppsalamonday', {
                parent: 'ginas.meetings',
                url: "/uppsala/monday",
                templateUrl: './ginas/uppsala-monday.html'
            })
            .state('uppsalatuesday', {
                parent: 'ginas.meetings',
                url: "/uppsala/tuesday",
                templateUrl: './ginas/uppsala-tuesday.html'
            })
            .state('summer', {
                parent: 'ginas.meetings',
                url: "/summer",
                templateUrl: './ginas/summer.html'
            })

            .state('wednesdaysummer', {
                parent: 'summer',
                url: "/wednesday",
                templateUrl: './ginas/summer.html'
            })
            .state('thursday', {
                parent: 'summer',
                url: "/thursday",
                templateUrl: './ginas/thursday.html'
            })
            .state('winter', {
                parent: 'ginas.meetings',
                url: "/winter",
                templateUrl: './ginas/winter.html'
            })
            .state('monday', {
                parent: 'winter',
                url: "/monday",
                templateUrl: './ginas/winter.html'
            })
            .state('tuesday', {
                parent: 'winter',
                url: "/tuesday",
                templateUrl: './ginas/tuesday.html'
            })
            .state('wednesday', {
                parent: 'winter',
                url: "/wednesday",
                templateUrl: './ginas/wednesday.html'
            })
	    .state('ginas2017', {
                parent: 'ginas.meetings',
                url: "/ginas2017",
                templateUrl: './ginas/ginas-oct2017.html'
            });
    }])
        ;
