/**
 * Created by sheilstk on 4/29/16.
 */
//(function () {


'use strict';
//'ui.bootstrap','jsonFormatter','angularSpinners'
var ginasWeb = angular.module('ginas', [
    'ngAria',
    'ngRoute',
    'ngAnimate',
    'ui.router',
    'ui.bootstrap',
    'ngSanitize',
    'swaggerUi',
    'mgcrea.bootstrap.affix',
    'swaggerUiAuthorization',
    'ginasWeb.ginas',
    'angular-click-outside',
    'ginasWeb.faqFactory',
    'ginasWeb.apiFactory',
    'ginasWeb.versionFactory',
    'ngTextTruncate',
    'ginasWeb.gsrs'
])
    .config(['$stateProvider','$urlRouterProvider', function ($stateProvider ,$urlRouterProvider, $location, $http, $window) {
        $urlRouterProvider.when('', '/');
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('ginas', {
                url: '',
                templateUrl: 'ginas/ginas.html',
                controller: function ($scope, $sce, $location, $window, $http, $uibModal) {
                    $scope.$sce = $sce;
                    $scope.headline = function(text){
                        var head = text.substring(0,200);
                        var sentence = head.lastIndexOf('.');
                        if(sentence > 0){
                            head = head.substring(0,(sentence+1));
                        }
                        return head;
                    }
                    $scope.open = function (size) {
                        var modalInstance = $uibModal.open({
                            templateUrl: './modal/modal.html',
                            controller: 'ModalInstanceCtrl'
                        });
                    }
                    $scope.showgdocForm = true;
                    $scope.toggleForm = function(){
                        //  console.log('testing123');
                        if($scope.showgdocForm === false){
                            $scope.showgdocForm = true;
                        }else{
                            $scope.showgdocForm = false;
                        }
                    }
                    $scope.test1=function(){
                        //    loaded();
                        _global.loaded();
                        //console.log('test1');
                    };
                    $scope.gdocForm = 'ginas/gdocTemplate.html';
                    console.log('testing');


                    $scope.redirect = function ( cid ) {
                        console.log(cid);
                        $location.path(cid);
                    }
                    $scope.redirectExt = function(url){
                        $window.location.href = url; //You should have http here.
                    }
                    $http.get('data/news.json').success(function(data) {
                        $scope.news = data;
                        console.log('success');
                    }).error(function(errorCallback){
                        console.log(errorCallback);
                    });


                    $scope.accordianMenu = function(data, title, content){
                    }
                    $scope.showGinas = false;
                    $scope.showGsrs = false;
                    $scope.showTeam = false;
                    $scope.changeView = function(val){



                        if(val == 'ginas'){
                            $scope.title = 'The Ginas Project';
                            $scope.content = "The main goal of ginas is the production of software, called G-SRS, to assist agencies in registering and documenting information about substances found in medicines. The Global Ingredient Archival System provides a common identifier for all of the substances used in medicinal products, utilizing a consistent definition of substances globally, including active substances under clinical investigation, consistent with the ISO 11238 standard. ";

                            $scope.showGinas = true;
                            $scope.showGsrs = false;
                            $scope.showTeam = false;
                        }
                        else if (val == 'gsrs') {
                            $scope.title = "G-SRS Software";
                            $scope.content = "The software tools created by the ginas project are developed, maintained, and distributed to ginas and other interested parties by the National Center for Advancing Translational Sciences (NCATS) at the National Institutes of Health (NIH), in close collaboration with the Food and Drug Administration (FDA).  ";

                            $scope.showGinas = false;
                            $scope.showGsrs = true;
                            $scope.showTeam = false;

                        }
                        else if (val == 'team') {
                            $scope.title = "The Ginas Team";
                            $scope.content = "Ginas will be able to store, retrieve, and distribute substance-related information described in the ISO 11238 standard. It will enable authorized agents to register new substances and curate and review existing substance data. ";

                            $scope.showGinas = false;
                            $scope.showGsrs = false;
                            $scope.showTeam = true;
                        }
                    }
                    $scope.changeView('ginas');

                }
            })
            .state('ginas.ginas2', {
                url: '/ginas2',
                templateUrl: 'ginas/ginas2.html',
                controller: function ($scope, $sce, $location, $http, $window) {
                    $scope.$sce = $sce;
                    $scope.headline = function(text){
                        var head = text.substring(0,200);
                        var sentence = head.lastIndexOf('.');
                        if(sentence > 0){
                            head = head.substring(0,(sentence+1));
                        }
                        return head;
                    }
                    $scope.redirect = function ( cid ) {
                        console.log(cid);
                        $location.path(cid);
                    }
                    $scope.redirectExt = function(url){
                        $window.location.href = url; //You should have http here.
                    }
                    $scope.news = [
                        {
                            title:"Lorem ipsum dolor sit amet, consectetur",
                            date:"July 7, 2018",
                            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Nibh ipsum consequat nisl vel pretium lectus. Sed elementum tempus egestas sed sed risus. Maecenas volutpat blandit aliquam etiam erat velit. In mollis nunc sed id. Tristique risus nec feugiat in fermentum. Mauris cursus mattis molestie a iaculis at. Nulla pellentesque dignissim enim sit amet venenatis. Cursus sit amet dictum sit amet. Ornare massa eget egestas purus viverra accumsan in nisl. Sit amet dictum sit amet.<br/><br/>Lobortis elementum nibh tellus molestie nunc non blandit massa enim. Id aliquet lectus proin nibh. Ac auctor augue mauris augue neque. Diam phasellus vestibulum lorem sed risus. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Neque egestas congue quisque egestas diam. Felis bibendum ut tristique et. Non pulvinar neque laoreet suspendisse interdum. Faucibus et molestie ac feugiat sed. Sodales ut etiam sit amet nisl purus in mollis. Fusce id velit ut tortor. Commodo odio aenean sed adipiscing diam donec adipiscing. Facilisis leo vel fringilla est ullamcorper. ",
                        },
                        {
                            title:"Non pulvinar neque laoreet suspendisse interdum",
                            date:"July 6, 2017",
                            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Nibh ipsum consequat nisl vel pretium lectus. Sed elementum tempus egestas sed sed risus. Maecenas volutpat blandit aliquam etiam erat velit. In mollis nunc sed id. Tristique risus nec feugiat in fermentum. Mauris cursus mattis molestie a iaculis at. Nulla pellentesque dignissim enim sit amet venenatis. Cursus sit amet dictum sit amet. Ornare massa eget egestas purus viverra accumsan in nisl. Sit amet dictum sit amet.<br/><br/>Lobortis elementum nibh tellus molestie nunc non blandit massa enim. Id aliquet lectus proin nibh. Ac auctor augue mauris augue neque. Diam phasellus vestibulum lorem sed risus. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Neque egestas congue quisque egestas diam. Felis bibendum ut tristique et. Non pulvinar neque laoreet suspendisse interdum. Faucibus et molestie ac feugiat sed. Sodales ut etiam sit amet nisl purus in mollis. Fusce id velit ut tortor. Commodo odio aenean sed adipiscing diam donec adipiscing. Facilisis leo vel fringilla est ullamcorper. ",
                        },
                        {
                            title:"Lobortis elementum nibh tellus molestie nunc non blandit massa enim. Id aliquet lectus proin nibh",
                            date:"July 7, 2016",
                            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Nibh ipsum consequat nisl vel pretium lectus. Sed elementum tempus egestas sed sed risus. Maecenas volutpat blandit aliquam etiam erat velit. In mollis nunc sed id. Tristique risus nec feugiat in fermentum. Mauris cursus mattis molestie a iaculis at. Nulla pellentesque dignissim enim sit amet venenatis. Cursus sit amet dictum sit amet. Ornare massa eget egestas purus viverra accumsan in nisl. Sit amet dictum sit amet.<br/><br/>Lobortis elementum nibh tellus molestie nunc non blandit massa enim. Id aliquet lectus proin nibh. Ac auctor augue mauris augue neque. Diam phasellus vestibulum lorem sed risus. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Neque egestas congue quisque egestas diam. Felis bibendum ut tristique et. Non pulvinar neque laoreet suspendisse interdum. Faucibus et molestie ac feugiat sed. Sodales ut etiam sit amet nisl purus in mollis. Fusce id velit ut tortor. Commodo odio aenean sed adipiscing diam donec adipiscing. Facilisis leo vel fringilla est ullamcorper. ",
                        },
                        {
                            title:"Lorem ipsum dolor sit amet, consectetur",
                            date:"July 7, 2016",
                            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Nibh ipsum consequat nisl vel pretium lectus. Sed elementum tempus egestas sed sed risus. Maecenas volutpat blandit aliquam etiam erat velit. In mollis nunc sed id. Tristique risus nec feugiat in fermentum. Mauris cursus mattis molestie a iaculis at. Nulla pellentesque dignissim enim sit amet venenatis. Cursus sit amet dictum sit amet. Ornare massa eget egestas purus viverra accumsan in nisl. Sit amet dictum sit amet.<br/><br/>Lobortis elementum nibh tellus molestie nunc non blandit massa enim. Id aliquet lectus proin nibh. Ac auctor augue mauris augue neque. Diam phasellus vestibulum lorem sed risus. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Neque egestas congue quisque egestas diam. Felis bibendum ut tristique et. Non pulvinar neque laoreet suspendisse interdum. Faucibus et molestie ac feugiat sed. Sodales ut etiam sit amet nisl purus in mollis. Fusce id velit ut tortor. Commodo odio aenean sed adipiscing diam donec adipiscing. Facilisis leo vel fringilla est ullamcorper. ",
                        }];
                    $scope.mmeetings=[
                         {
                                  heading: 'Ginas Monthly Meeting: June 2018',
                                topics: [
                                    {
                                         url: './assets/files/monthlymeetings/201806/GSRS Development Update June 2018.pdf',
                                        txt: 'GSRS Development Update'
                                    },
                                    {
                                           url: './assets/files/monthlymeetings/201806/FDA-GInAS-June 2018-HD-SAVE.pdf',
                                           txt: 'IDMP and how we can support the health care domain'
                                    }
                                    //TODO: add FDA->PDF and Fritz presentation
                                   ]
                            },
                             {
                                   heading: 'Ginas Monthly Meeting: April 2018',
                                   topics: [
                                    {
                                           url: './assets/files/monthlymeetings/GSRSDevelopmentUpdate201804.pdf',
                                           txt: 'GSRS Development Update'
                                    }
                                   //Add rancho presentation
                                ]
                            },
                        {
                            heading: 'Ginas Monthly Meeting: February 2018',
                            topics: [
                                {
                                    url: './assets/files/monthlymeetings/GSRSDevelopmentUpdateFeb2018.pdf',
                                    txt: 'GSRS Development Update'
                                } ,
                                {
                                    url: './assets/files/monthlymeetings/ExcelToolsForGinasFeb2018.pdf',
                                    txt: 'Excel Tools For Ginas'
                                },
                                {
                                    url:'./assets/files/monthlymeetings/installing-ginas-ubuntu-pg-20180207.pdf',
                                    txt: 'Installing G-SRS in Different Environments'
                                }
                            ]
                        },
                        {
                            heading: 'Ginas Monthly Meeting: December 2017',
                            topics: [
                                {
                                    url: 'replace',
                                    txt: 'Overview of data in FDA G-SRS system'
                                },
                                {
                                    url: './assets/files/monthlymeetings/GSRSDevelopmentUpdateDec2017.pdf',
                                    txt: 'Overview of NCATS Inxight Drug Information System'
                                }

                            ]
                        }
                    ];
                    $scope.links=[
                        {
                            heading: 'Ginas 2017: October 2017 Ginas Meeting',
                            url: './#/meetings/ginas2017'
                        },
                        {heading: 'IPQ 2015: Global Excipient Databases Are Advancing That Will Fill Content and Functionality Gaps ' +
                                'in Existing Regulatory Efforts and Further Industry/Regulator Communication',
                            url: 'http://multibriefs.com/briefs/ipec/IPEC%20GInAS%20NIPTE%20IID.pdf'
                        },{
                            heading: 'EMA 2015: September 2015 Ginas Meeting Highlights',
                            url: 'http://www.ema.europa.eu/docs/en_GB/document_library/Presentation/2015/10/WC500196210.pdf'
                        },{
                            heading: 'Nature Reviews Drug Discovery: NCATS launches \'periodic table\' for medicinal product ingredients',
                            url: 'http://www.nature.com/nrd/journal/v15/n6/full/nrd.2016.116.html'
                        },{
                            heading: 'NCATS: Global Ingredient Archival System (ginas)',
                            url: 'https://ncats.nih.gov/expertise/preclinical/ginas'
                        },{
                            heading:'IDMP: ginas Workshop Uppsala',
                            url: 'https://www.idmp1.com/ginas-workshop-uppsala/'
                        },{
                            heading:'RAPS: Seven Pharmaceutical Regulators and NIH Collaborate to Build Drug Ingredient Database',
                            url: 'http://www.raps.org/Regulatory-Focus/News/2016/04/20/24804/Seven-Pharmaceutical-Regulators-and-NIH-Collaborate-to-Build-Drug-Ingredient-Database/'
                        }
                    ];
                    $scope.presentations=[
                        {   date: 'June 8, 2016',
                            heading: 'IRISS: Defining Substances and Organizing Regulatory Information: The deployment of the G-SRS at FDA',
                            url: 'https://www.iriss-forum.org/webinars/defining-substances-and-organizing-regulatory-information-the-deployment-of-the-g-srs-at-fda'
                        },{
                            date: 'April 6, 2016',
                            heading:'Bio IT Boston Panel Discussion',
                            desc: 'Tyler Peryea and Larry Callahan (FDA) sat on a panel discussion presenting the work of IUPAC and US Government agencies to describe large molecules.'
                        },{
                            date:'March 17, 2016',
                            heading: 'ginas presentation at ACS',
                            url: './assets/files/ginas_031616.pdf'
                        },{
                            date:'September 7, 2015',
                            heading: 'past ginas presentations',
                            url: './#/meetings/uppsala/monday'
                        }
                    ];


                    $scope.accordianMenu = function(data, title, content){
                    }
                    $scope.showGinas = false;
                    $scope.showGsrs = false;
                    $scope.showTeam = false;
                    $scope.changeView = function(val){



                        if(val == 'ginas'){
                            $scope.title = 'The Ginas Project';
                            $scope.content = "The main goal of ginas is the production of software, called G-SRS, to assist agencies in registering and documenting information about substances found in medicines. The Global Ingredient Archival System provides a common identifier for all of the substances used in medicinal products, utilizing a consistent definition of substances globally, including active substances under clinical investigation, consistent with the ISO 11238 standard. ";

                            $scope.showGinas = true;
                            $scope.showGsrs = false;
                            $scope.showTeam = false;
                        }
                        else if (val == 'gsrs') {
                            $scope.title = "G-SRS Software";
                            $scope.content = "The software tools created by the ginas project are developed, maintained, and distributed to ginas and other interested parties by the National Center for Advancing Translational Sciences (NCATS) at the National Institutes of Health (NIH), in close collaboration with the Food and Drug Administration (FDA).  ";

                            $scope.showGinas = false;
                            $scope.showGsrs = true;
                            $scope.showTeam = false;

                        }
                        else if (val == 'team') {
                            $scope.title = "The Ginas Team";
                            $scope.content = "Ginas will be able to store, retrieve, and distribute substance-related information described in the ISO 11238 standard. It will enable authorized agents to register new substances and curate and review existing substance data. ";

                            $scope.showGinas = false;
                            $scope.showGsrs = false;
                            $scope.showTeam = true;
                        }
                    }
                    $scope.changeView('ginas');
                }
            })
            .state('ginas.main', {
                url: '/'
            })
            .state('ginas.faq', {
                url: "/faqs",
                templateUrl: './faqs/faqs.html',
                controller: 'faqsController'

            }).state('ginas.data', {
            url: "/data",
            templateUrl: './data.html'
        }).state('ginas.signup', {
            url: "/signup",
            templateUrl: './gdocTemplate.html'
        }).state('ginas.usp_signup', {
            url: "/usp_signup",
            templateUrl: './ginas/usp_signup.html',
            controller: 'apiController'
        })
            .state('ginas.release', {
                url: "/release",
                templateUrl: './release/release.html',
                controller: 'releaseController'
            })
            .state('ginas.articles', {
                url: "/articles",
                templateUrl: './news/newstest.html',
                controller: 'newsController'
            })
            .state('ginas.testing', {
                url: "/testing",
                templateUrl: './ginas/gdocTemplate.html',
                controller: function ($scope, $sce, $location, $window) {
                    $scope.test1=function(){
//loaded();
                        _global.loaded();
                    };

                    /*$.ajax({
                        url: "https://script.google.com/macros/s/AKfycbxrOeWl2D--dFY5aGFfGjZ3bMff9YNWWp9tzOND/exec",
                        data: {"entry.1023121230": field3, "entry.1230072460": field1, "entry.2113237615": field2},
                        type: "POST",
                        dataType: "xml",
                        statusCode: {
                            0: function() {
                                //Success message
                            },
                            200: function() {
                                //Success Message
                            }
                        }
                    });*/
                },

            })
            .state('ginas.about', {
                url: "/about",
                templateUrl: './about/about.html',
                controller: 'aboutController'
            }).state('ginas.api', {
            url: "/api",
            templateUrl: './api/api.html',
            controller: 'apiController'
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

        })
            .state('gsrs', {
                url: "^/gsrs",
                templateUrl: 'gsrs/gsrs.html',
                controller: function ($scope, faqFactory) {
                    $scope.features = [
                        {
                            type: 'Chemical',
                            imageurl: './assets/images/subclasses/chemical.svg',
                            description: 'Chemical Substances are those substances that can be described completely by their chemical structure, stoichiometry, and stereochemical information. They are typically idealized small molecules, with any defined salt, solvent or hydration state, but without physical form or physical state information.'
                        }, {
                            type: 'Protein',
                            imageurl: './assets/images/subclasses/protein.svg',
                            description: 'Protein Substances are substances which are predominantly sequences of covalently linked amino acids. These may include peptides, monoclonal antibodies, and other protein complexes. The substance level captures the primary sequence of each subunit, the disulfide links present, the glycosylation type and sites, and any modifications that have been done to the sequence (such as additions of a new covalent entity, like a linked toxin, or a modified amino acid residue). Specific glycoforms and hydrogen bonds are not captured at the substance level.'
                        }, {
                            type: 'Polymer',
                            imageurl: './assets/images/subclasses/polymer.svg',
                            description: 'Polymer Substances are substances which are polydisperse, and contain a Structural Repeating Unit (SRUs). These substances include information about the monomers used to produce the polymer, the type of polymer (e.g. homopolymer, copolymer), the geometry of the polymer (linear, branching), the structures of the SRUs, their allowed connectivities, and their amounts and degree of polymerization. Also captured are physical properties (e.g. viscosity, hardness, density) that may define and distinguish the polymer if those properties are not deterministic from the provided structural information.'
                        }, {
                            type: 'Nucleic Acid',
                            imageurl: './assets/images/subclasses/nucleic-acid.svg',
                            description: 'Nucleic Acid substances are substances which are predominantly sequences of nucleic acids (such as DNA and RNA). These substances are characterized by their sequence of nucleobases, as well as the structure of their sugar and (typically phosphate) linkages. As with Protein substances, Nucleic Acid substances may have modifications (such as a nucleobase substitution, a modified sugar or linkage, or a 3\'/5\' modification).'
                        }, {
                            type: 'Structurally Diverse',
                            imageurl: './assets/images/subclasses/structurally-diverse.svg',
                            description: 'Structurally Diverse substances are those that are derived from natural material sources, such as plants, animals or minerals. These substances are characterized by their source material (taxonomic information for organisms), the parts used from that source material (e.g. leaf, stem, bone), and the fraction used (e.g. oils, platelets). Detailed extraction information is not captured at the substance level.'
                        }, {
                            type: 'Mixture',
                            imageurl: './assets/images/subclasses/mixture.svg',
                            description: 'Mixture Substances are those that can be described by a countable collection of individual single substances, provided they are derived from the same synthetic process, or extracted from the same source material. When derived from a source material, that source material is also specified. "Air", for example, is a mixture of primarily Oxygen and Nitrogen. Diverse substances mixed together post hoc are not mixtures. Relative amounts of the mixture components are not captured at the substance level.'
                        }, {
                            type: 'Group 1 Specified Substance',
                            imageurl: './assets/images/subclasses/concept.svg',
                            description: 'Group 1 Specified Substances are the first level of specified substances. These are materials that are more specific than the substance level, and may contain information qualifying a specific substance (such as physical form, or additional properties). It is also the level where multi-substance ingredients can be specified, along with their relative amounts.'
                        }, {
                            type: 'Concept',
                            imageurl: './assets/images/subclasses/concept.svg',
                            description: 'Concepts are records which are not substances, but are still of importance. These are typically ingredient concepts which are not specific enough to get a substance designation (such as "placebo"), or a variant concepts of a substance which have some distinction in meaning from their parent substances. Concepts may also be used for non-ingredient concepts, such as diseases, targets and pathways.'
                        }
                    ]
                }
            })
    }])
    .run(function($anchorScroll, $rootScope,   $state,   $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        $rootScope.$on('$stateChangeSuccess', function() {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        });
    })

    .directive('ginasMenu', function ($state) {
        return {
            templateUrl: "menu/menu.html",
            link: function(scope, element){
                scope.print = function(){
                    scope.isCollapsed = false;
                }
            }
        };
    })

    .directive('ginasFooter', function () {
        return {
            templateUrl: "menu/footer.html"
        };
    })
    .controller('ModalInstanceCtrl', function ($scope, $uibModalInstance) {

        $scope.ok = function () {
            $uibModalInstance.close();
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    })
    .directive('signupForm', function () {
        return {

            /*  link: function($scope, element, attrs) {
              // Trigger when number of children changes,
              // including by directives like ng-repeat
              var watch = $scope.$watch(function() {
                  return element.children().length;
              }, function() {
                  // Wait for templates to render
                  $scope.$evalAsync(function() {
                      // Finally, directives are evaluated
                      // and templates are renderer here
                      var children = element.children();
                      console.log(children);
                  });
              });
          },*/
            templateUrl: "./gdocTemplate.html",
        };
    })
    .directive('version', function () {
        return {
            templateUrl: "./release/version.html",
            scope:{
                release: '='
            }
        };
    }).directive('changelog', function () {
        return {
            templateUrl: "./release/changelog.html",
            scope:{
                changes: '='
            }
        };
    }).run(["$rootScope", "$anchorScroll" , function ($rootScope, $anchorScroll) {
        $rootScope.$on("$locationChangeSuccess", function() {
            $anchorScroll();
        });
    }]);
/*.directive('accordion', function () {
        return {
            restrict: 'E',
            scope: { model: '='},
            templateUrl: 'panelTemplate.html',
            link: function (scope, element, attr) {
                scope.parentId = attr.id;
            }

        }
    })*/


//})();
