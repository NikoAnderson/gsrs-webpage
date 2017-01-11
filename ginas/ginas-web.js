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
        'swaggerUiAuthorization',
        'ginasWeb.ginas',
        'angular-click-outside',
       'ginasWeb.faqFactory',
       'ginasWeb.apiFactory',
       'ginasWeb.versionFactory',
        'ginasWeb.gsrs'
    ])
        .config(['$stateProvider','$urlRouterProvider', function ($stateProvider ,$urlRouterProvider) {
            $urlRouterProvider.when('', '/');
            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state('ginas', {
                     url: '',
                    templateUrl: 'ginas/ginas.html',
                    controller: function ($scope, $sce) {
                        $scope.$sce = $sce;
                        $scope.links=[
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
                                doc: './assets/files/ginas_031616.pdf'
                            },{
                                date:'September 7, 2015',
                                heading: 'past ginas presentations',
                                url: './#/meetings/uppsala/monday'
                            }
                        ]
                    }
                })
                .state('ginas.main', {
                    url: '/'
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
                                description: 'Concepts are not records which are not substances, but are still of importance. These are typically ingredient concepts which are not specific enough to get a substance designation (such as "placebo"), or a variant concepts of a substance which have some distinction in meaning from their parent substances. Concepts may also be used for non-ingredient concepts, such as diseases, targets and pathways.'
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
    });
    
    
    
//})();
