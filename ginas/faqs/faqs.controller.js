angular.module('ginas')
.controller('faqsController',function($http,$scope,$location, $anchorScroll){
	/*$http.get('data/faqs.json').then(function success(response){
		$scope.faqs = response.data;
	},function error(){
		console.log('error');


	})*/
	$anchorScroll.yOffset = -50;
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
                        $anchorScroll.yOffset = 50;
                        $anchorScroll(prmElementToScrollTo);
                    };
$scope.news = [
    {
        title:"Lorem ipsum dolor sit amet, consectetur",
        date:"July 7, 2018",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Nibh ipsum consequat nisl vel pretium lectus. Sed elementum tempus egestas sed sed risus. Maecenas volutpat blandit aliquam etiam erat velit. In mollis nunc sed id. Tristique risus nec feugiat in fermentum. Mauris cursus mattis molestie a iaculis at. Nulla pellentesque dignissim enim sit amet venenatis. Cursus sit amet dictum sit amet. Ornare massa eget egestas purus viverra accumsan in nisl. Sit amet dictum sit amet.<br/>Lobortis elementum nibh tellus molestie nunc non blandit massa enim. Id aliquet lectus proin nibh. Ac auctor augue mauris augue neque. Diam phasellus vestibulum lorem sed risus. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Neque egestas congue quisque egestas diam. Felis bibendum ut tristique et. Non pulvinar neque laoreet suspendisse interdum. Faucibus et molestie ac feugiat sed. Sodales ut etiam sit amet nisl purus in mollis. Fusce id velit ut tortor. Commodo odio aenean sed adipiscing diam donec adipiscing. Facilisis leo vel fringilla est ullamcorper. ",
        image:"../assets/images/simethicone.png"
    },
    {
        title:"Non pulvinar neque laoreet suspendisse interdum",
        date:"July 6, 2017",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Nibh ipsum consequat nisl vel pretium lectus. Sed elementum tempus egestas sed sed risus. Maecenas volutpat blandit aliquam etiam erat velit. In mollis nunc sed id. Tristique risus nec feugiat in fermentum. Mauris cursus mattis molestie a iaculis at. Nulla pellentesque dignissim enim sit amet venenatis. Cursus sit amet dictum sit amet. Ornare massa eget egestas purus viverra accumsan in nisl. Sit amet dictum sit amet.<br/>Lobortis elementum nibh tellus molestie nunc non blandit massa enim. Id aliquet lectus proin nibh. Ac auctor augue mauris augue neque. Diam phasellus vestibulum lorem sed risus. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Neque egestas congue quisque egestas diam. Felis bibendum ut tristique et. Non pulvinar neque laoreet suspendisse interdum. Faucibus et molestie ac feugiat sed. Sodales ut etiam sit amet nisl purus in mollis. Fusce id velit ut tortor. Commodo odio aenean sed adipiscing diam donec adipiscing. Facilisis leo vel fringilla est ullamcorper. ",
    },
    {
        title:"Lobortis elementum nibh tellus molestie nunc non blandit massa enim. Id aliquet lectus proin nibh",
        date:"July 7, 2016",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Nibh ipsum consequat nisl vel pretium lectus. Sed elementum tempus egestas sed sed risus. Maecenas volutpat blandit aliquam etiam erat velit. In mollis nunc sed id. Tristique risus nec feugiat in fermentum. Mauris cursus mattis molestie a iaculis at. Nulla pellentesque dignissim enim sit amet venenatis. Cursus sit amet dictum sit amet. Ornare massa eget egestas purus viverra accumsan in nisl. Sit amet dictum sit amet.<br/>Lobortis elementum nibh tellus molestie nunc non blandit massa enim. Id aliquet lectus proin nibh. Ac auctor augue mauris augue neque. Diam phasellus vestibulum lorem sed risus. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Neque egestas congue quisque egestas diam. Felis bibendum ut tristique et. Non pulvinar neque laoreet suspendisse interdum. Faucibus et molestie ac feugiat sed. Sodales ut etiam sit amet nisl purus in mollis. Fusce id velit ut tortor. Commodo odio aenean sed adipiscing diam donec adipiscing. Facilisis leo vel fringilla est ullamcorper. ",
    },
    {
        title:"Lorem ipsum dolor sit amet, consectetur",
        date:"July 7, 2016",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Nibh ipsum consequat nisl vel pretium lectus. Sed elementum tempus egestas sed sed risus. Maecenas volutpat blandit aliquam etiam erat velit. In mollis nunc sed id. Tristique risus nec feugiat in fermentum. Mauris cursus mattis molestie a iaculis at. Nulla pellentesque dignissim enim sit amet venenatis. Cursus sit amet dictum sit amet. Ornare massa eget egestas purus viverra accumsan in nisl. Sit amet dictum sit amet.<br/>Lobortis elementum nibh tellus molestie nunc non blandit massa enim. Id aliquet lectus proin nibh. Ac auctor augue mauris augue neque. Diam phasellus vestibulum lorem sed risus. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Neque egestas congue quisque egestas diam. Felis bibendum ut tristique et. Non pulvinar neque laoreet suspendisse interdum. Faucibus et molestie ac feugiat sed. Sodales ut etiam sit amet nisl purus in mollis. Fusce id velit ut tortor. Commodo odio aenean sed adipiscing diam donec adipiscing. Facilisis leo vel fringilla est ullamcorper. ",
    }];
$scope.faqs = [
    {
        subject: "Intro",
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
             }, {
            subject: "Software",
                questions: [
                    {
                        question: 'What’s the software’s name? Ginas? G-SRS?',
                        answer: 'Officially, the software produced by NIH/NCATS is called “G-SRS” (Global Substance Registration System).' +
                        ' “ginas” (Global Ingredient Archival System) is the name of the collaborative international effort to realize a global mechanism for substance information exchange. ' +
                        'Admittedly, branding the released software with the initiative’s logo has caused a lot of confusion. ' +
                        'It is most correct to say that “G-SRS” is the “software to support the GINAS initiative”. ' +
                        'Unofficially, “GINAS” is often used interchangeably with G-SRS to refer to the software.'
                    }
                    ,
                    {
                        question: 'Where is the G-SRS Software being used?',
                        answer: 'Currently, the software is being used in a supporting role for the USA FDA Substance Registration System. ' +
                        'Several evaluation versions are being used in other regulatory environments, pharmaceutical companies, and technology firms. ' +
                        'The software is scheduled to become the production software for the FDA’s SRS in September of 2015.'
                    }
                    ,
                    {
                        question: 'Does G-SRS have an official or mandatory status?',
                        answer: 'At this time, the ginas initiative and G-SRS software are neither mandatory nor officially endorsed by any regulatory agency, or governmental body. '
                    }
                    ,
                    {
                        question: 'Can I get access to the API documentation?',
                        answer: 'The software is still in active development, but preliminary API documentation can be found on the NIH NCATS git repository. ' +
                        'Interactive examples of using the REST API can also be found here (http://tripod.nih.gov/ginas/api.html).'
                    }
                    ,
                    {
                        question: 'What is the license for the G-SRS software?',
                        answer: 'Please refer to the individual licenses of referenced libraries for further information. ' + 
                        'The software includes many open source components, with associated open source licenses for their use and distribution, and some commercial components, which are licensed by us for distribution to you as part of this software product. ' +
                        'The source code authored by NIH/NCATS are public domain and freely distributable.'
                    }
                    ,
                    {
                        question: 'Are there data included with the software?',
                        answer: 'Yes. Certain releases of G-SRS are available packaged together with example seed data compiled from various sources, with the FDA SRS data as the primary contributor. ' +
                        'At this time, the seed dataset holds no official status, and is meant only to aid in the understanding of the system and data model. ' +
                        'As such, apparent errata in the dataset may be the result of the lossy translation process from other systems, or simply testing data meant to explore certain features of the data model.'
                    }
                ]
            }, {
                subject: "Updating the Software",
                questions: [
                    {
                        question: 'How do I get updates to the data?',
                        answer: 'Periodic full data dumps of the seed data will be made available with every software release during development, and bi-monthly thereafter. ' +
                        'The seed data is presently packaged together with the software itself. It is possible to receive the seed dataset independently of the software, ' +
                        'but this is not officially supported at this time.'
                    }
                    ,
                    {
                        question: 'How do I get updates to the software?',
                        answer: 'Periodic releases of the software are posted here. Please see the (Installation instructions) for details on installation. ' +
                        'In-place upgrades to the software are not official supported at this time.'
                    }
                    ,
                    {
                        question: 'Who is maintaining the software?',
                        answer: 'NIH NCATS is maintaining the software source code, and providing the core updates, bug fixes, and releases. ' +
                        'NIH NCATS currently offers no official support for installations, customizations and extensions of the software by any individual or organization. ' +
                        'That said, we want to facilitate its use by the community and make available our technical expertise for those that intend to take a deep dive with the software. ' +
                        'Feel free to contact us with questions and feedback (including bug reports!).'
                    }
                    ,
                    {
                        question: 'Who is maintaining the data?',
                        answer: 'The seed data dump is a compilation of various data sources (most notably the FDA SRS), as well as certain testing and example data. ' +
                        'NIH NCATS has partnered with the FDA in an attempt to make the seed dataset maximally useful, but with no guarantee of its accuracy. ' +
                        'At this time, the source data is primarily maintained by the FDA, with the compilation procedure being maintained by NCATS.'
                    }

                ]
            }, {
                subject: "Message Exchange",
                questions: [
                    {
                        question: 'Will the G-SRS system support the lookup of similar substances as part of registration?',
                        answer: 'Yes. The software issues warnings if there is a similar definition for a substance during registration. ' +
                        'A registrar will have to read through those warnings and confirm that the substances are, in fact, unique. Similarity of definitions is currently defined like this:' +
                        'Chemicals - Any substance which is the same based on a tautomer-insensitive, stereo-insensitive, salt-stripped form is flagged as being a possible duplicate.' +
                        'Proteins & Nucleic Acids- Any substance for which any of the subunit sequences have an identity match greater than a preset identity cutoff for sequence alignment identity ' +
                        'will issue a possible duplicate warning.' +
                        'Similarity checks for Polymers, STructurally Diverse, Mixtures and Group 1 and above will be released in subsequent versions of G-SRS.'
                    }
                    ,
                    {
                        question: 'What validation is required to register a substance?',
                        answer: 'Each substance must have at least 1 name in order to be registered. It may also have several codes associated with it ' +
                        '(e.g. registry numbers, external identifiers). A validation rule also warns the user when registering a substance with a sufficiently similar ' +
                        'name or identical code to one already registered. This is important, as many times (especially from vendors and other data sources) the exact definitional ' +
                        'information of the substance (e.g. chemical structure) may have some minor errors,' +
                        ' but the bulk of curation has gone into ensuring that the names / code numbers were correct. '
                    }
                    ,
                    {
                        question: 'Is G-SRS envisaged as a potential replacement for a compound registration solution within a Pharma org' +
                        ' – i.e. scales to millions of substances and supports sub-structure searching?',
                        answer: 'Yes. The chemistry support library can efficiently search through millions of substances and the database pieces are designed to scale as well. ' +
                        'The current registration system has been tested to support 100,000 records using typical hardware; ' +
                        'specialized configuration (e.g. more memory) may be needed to support registration of much larger sets of substances.'
                    }
                ]
            }, {
                subject: "Technical Specifications",
                questions: [
                    {
                        question: 'What are recommended chemical drawing tools?',
                        answer: 'G-SRS comes with the JSDraw chemical drawing tool licensed from Scilligence, and chemical substance registration supports using MDL molfiles ' +
                        'copied from other drawing tools as well.'
                    }
                    ,
                    {
                        question: 'Will G-SRS support specified substance levels 1-4?',
                        answer: 'G-SRS will eventually support all specified substance levels. Currently, it supports only up to  group 1 specified substance G1SS, ' +
                        'but there are plans to expand to G2SS and G3SS in the near term (likely a ginas 2.0 release). G4SS will take a bit more time, ' +
                        'as the details required are more complex, and have a much stronger tie to specific interpretations by the regulators, which have not yet been qualified. '
                    }
                    ,
                    {
                        question: 'What database is used?',
                        answer: 'G-SRS is database agnostic. Presently, the software ships with an embedded H2 database, with supporting embedded lucene indexes. ' +
                        'However, the software has been successfully configured and deployed in Oracle and MySQL databases as well.'
                    }
                    ,
                    {
                        question: 'What language is the code written in?',
                        answer: 'The REST api and supporting services are written in Java.' +
                        ' The frontend registration interface is written in Javascript, primarily Angular JS, CSS and HTML.'
                    },{
                        question: 'Is a full FDA dataset available?',
                        answer: 'Yes. Please contact us for info.'
                    }
                ]
    }];
})