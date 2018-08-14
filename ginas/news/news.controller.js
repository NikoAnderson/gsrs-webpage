angular.module('ginas')
.controller('newsController',function ($http, $scope, $location, $anchorScroll){
   /* var url = 'news/news.json';
    var request = new XMLHttpRequest();
    request.open('HEAD', url, false);
    request.send();
    if(request.status == 200) {
        console.log('found');
    }else{
        console.log('not');
    }*/
    $scope.myFilters = {};
    $scope.dockSwitch = function(event){
        var el = document.getElementById('docker');
        if(event.target.innerHTML == "undock"){
            event.target.innerHTML = "dock";
            angular.element(el).removeClass('affix');
            angular.element(el).addClass('undock');
        }else{
            event.target.innerHTML = "undock";
            angular.element(el).removeClass('undock');
            //angular.element(el).addClass('affix');
        }

        //angular.element(myElement).addClass('new-class');
    }
    $scope.myFilter = {};
    $scope.filterYear = '';
    $http.get('data/news.json').success(function(data) {
        $scope.articles = data;
        console.log('success');
    }).error(function(errorCallback){
        console.log(errorCallback);
    });

    /* $scope.showArticles = true;
     $scope.showMeetings = false;
     $scope.showPresentations = false;
     $scope.changeNews= function(val){
             if (val == 'articles'){
                 $scope.active = $scope.news;
                 $scope.showArticles = true;
                  $scope.showPresentations = false;
                 $scope.showMeetings = false;
             }else if(val == 'meetings'){
                 $scope.showArticles = false;
                  $scope.showPresentations = false;
                 $scope.showMeetings = true;
             }else if(val == 'presentations'){
                 $scope.showArticles = false;
                  $scope.showPresentations = true;
                 $scope.showMeetings = false;
             }
         }*/
    $scope.scrollTo = function (subject, index) {
                        console.log('scroll called');
                        var prmElementToScrollTo;
                        if(index >= 0){
                            prmElementToScrollTo = subject+'-'+index;
                        }else{
                            prmElementToScrollTo= subject;
                        }
                   
                        $anchorScroll.yOffset = 50;
                        $anchorScroll(prmElementToScrollTo);
                    };
    $scope.parseDate = function (date) {
        return new Date(Date.parse(date));
    }
/*
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
    $scope.articles = [{   type:"news",
        title:"Lorem ipsum dolor sit amet, consectetur",
        date:"July 7, 2018",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Nibh ipsum consequat nisl vel pretium lectus. Sed elementum tempus egestas sed sed risus. Maecenas volutpat blandit aliquam etiam erat velit. In mollis nunc sed id. Tristique risus nec feugiat in fermentum. Mauris cursus mattis molestie a iaculis at. Nulla pellentesque dignissim enim sit amet venenatis. Cursus sit amet dictum sit amet. Ornare massa eget egestas purus viverra accumsan in nisl. Sit amet dictum sit amet.<br/><br/>Lobortis elementum nibh tellus molestie nunc non blandit massa enim. Id aliquet lectus proin nibh. Ac auctor augue mauris augue neque. Diam phasellus vestibulum lorem sed risus. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Neque egestas congue quisque egestas diam. Felis bibendum ut tristique et. Non pulvinar neque laoreet suspendisse interdum. Faucibus et molestie ac feugiat sed. Sodales ut etiam sit amet nisl purus in mollis. Fusce id velit ut tortor. Commodo odio aenean sed adipiscing diam donec adipiscing. Facilisis leo vel fringilla est ullamcorper. ",
    },
        {   type:"news",
            title:"Non pulvinar neque laoreet suspendisse interdum",
            date:"July 6, 2017",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Nibh ipsum consequat nisl vel pretium lectus. Sed elementum tempus egestas sed sed risus. Maecenas volutpat blandit aliquam etiam erat velit. In mollis nunc sed id. Tristique risus nec feugiat in fermentum. Mauris cursus mattis molestie a iaculis at. Nulla pellentesque dignissim enim sit amet venenatis. Cursus sit amet dictum sit amet. Ornare massa eget egestas purus viverra accumsan in nisl. Sit amet dictum sit amet.<br/><br/>Lobortis elementum nibh tellus molestie nunc non blandit massa enim. Id aliquet lectus proin nibh. Ac auctor augue mauris augue neque. Diam phasellus vestibulum lorem sed risus. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Neque egestas congue quisque egestas diam. Felis bibendum ut tristique et. Non pulvinar neque laoreet suspendisse interdum. Faucibus et molestie ac feugiat sed. Sodales ut etiam sit amet nisl purus in mollis. Fusce id velit ut tortor. Commodo odio aenean sed adipiscing diam donec adipiscing. Facilisis leo vel fringilla est ullamcorper. ",
        },
        {   type:"news",
            title:"Lobortis elementum nibh tellus molestie nunc non blandit massa enim. Id aliquet lectus proin nibh",
            date:"July 5, 2016",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Nibh ipsum consequat nisl vel pretium lectus. Sed elementum tempus egestas sed sed risus. Maecenas volutpat blandit aliquam etiam erat velit. In mollis nunc sed id. Tristique risus nec feugiat in fermentum. Mauris cursus mattis molestie a iaculis at. Nulla pellentesque dignissim enim sit amet venenatis. Cursus sit amet dictum sit amet. Ornare massa eget egestas purus viverra accumsan in nisl. Sit amet dictum sit amet.<br/><br/>Lobortis elementum nibh tellus molestie nunc non blandit massa enim. Id aliquet lectus proin nibh. Ac auctor augue mauris augue neque. Diam phasellus vestibulum lorem sed risus. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Neque egestas congue quisque egestas diam. Felis bibendum ut tristique et. Non pulvinar neque laoreet suspendisse interdum. Faucibus et molestie ac feugiat sed. Sodales ut etiam sit amet nisl purus in mollis. Fusce id velit ut tortor. Commodo odio aenean sed adipiscing diam donec adipiscing. Facilisis leo vel fringilla est ullamcorper. ",
        },
        {   type:"news",
            title:"Lorem ipsum dolor sit amet, consectetur",
            date:"July 4, 2016",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Nibh ipsum consequat nisl vel pretium lectus. Sed elementum tempus egestas sed sed risus. Maecenas volutpat blandit aliquam etiam erat velit. In mollis nunc sed id. Tristique risus nec feugiat in fermentum. Mauris cursus mattis molestie a iaculis at. Nulla pellentesque dignissim enim sit amet venenatis. Cursus sit amet dictum sit amet. Ornare massa eget egestas purus viverra accumsan in nisl. Sit amet dictum sit amet.<br/><br/>Lobortis elementum nibh tellus molestie nunc non blandit massa enim. Id aliquet lectus proin nibh. Ac auctor augue mauris augue neque. Diam phasellus vestibulum lorem sed risus. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Neque egestas congue quisque egestas diam. Felis bibendum ut tristique et. Non pulvinar neque laoreet suspendisse interdum. Faucibus et molestie ac feugiat sed. Sodales ut etiam sit amet nisl purus in mollis. Fusce id velit ut tortor. Commodo odio aenean sed adipiscing diam donec adipiscing. Facilisis leo vel fringilla est ullamcorper. ",
        },
        {   type:"meeting",
            date:"February 2018",
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
        {   type:"meeting",
            date:"December 2017",
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
        },
        {   type:"link",
            heading: 'Ginas 2017: October 2017 Ginas Meeting',
            url: './#/meetings/ginas2017'
        },
        {   type:"link",
            heading: 'IPQ 2015: Global Excipient Databases Are Advancing That Will Fill Content and Functionality Gaps ' +
                'in Existing Regulatory Efforts and Further Industry/Regulator Communication',
            url: 'http://multibriefs.com/briefs/ipec/IPEC%20GInAS%20NIPTE%20IID.pdf'
        },{ type:"link",
            heading: 'EMA 2015: September 2015 Ginas Meeting Highlights',
            url: 'http://www.ema.europa.eu/docs/en_GB/document_library/Presentation/2015/10/WC500196210.pdf'
        },{ type:"link",
            heading: 'Nature Reviews Drug Discovery: NCATS launches \'periodic table\' for medicinal product ingredients',
            url: 'http://www.nature.com/nrd/journal/v15/n6/full/nrd.2016.116.html'
        },{ type:"link",
            heading: 'NCATS: Global Ingredient Archival System (ginas)',
            url: 'https://ncats.nih.gov/expertise/preclinical/ginas'
        },{ type:"link",
            heading:'IDMP: ginas Workshop Uppsala',
            url: 'https://www.idmp1.com/ginas-workshop-uppsala/'
        },{ type:"link",
            heading:'RAPS: Seven Pharmaceutical Regulators and NIH Collaborate to Build Drug Ingredient Database',
            url: 'http://www.raps.org/Regulatory-Focus/News/2016/04/20/24804/Seven-Pharmaceutical-Regulators-and-NIH-Collaborate-to-Build-Drug-Ingredient-Database/'
        },
        {   type: 'presentation',
            date: 'June 8, 2016',
            heading: 'IRISS: Defining Substances and Organizing Regulatory Information: The deployment of the G-SRS at FDA',
            url: 'https://www.iriss-forum.org/webinars/defining-substances-and-organizing-regulatory-information-the-deployment-of-the-g-srs-at-fda'
        },{type: 'presentation',
            date: 'April 6, 2016',
            heading:'Bio IT Boston Panel Discussion',
            desc: 'Tyler Peryea and Larry Callahan (FDA) sat on a panel discussion presenting the work of IUPAC and US Government agencies to describe large molecules.'
        },{ type: 'presentation',
            date:'March 17, 2016',
            heading: 'ginas presentation at ACS',
            url: './assets/files/ginas_031616.pdf'
        },{ type: 'presentation',
            date:'September 7, 2015',
            heading: 'past ginas presentations',
            url: './#/meetings/uppsala/monday'
        }
    ];*/
})