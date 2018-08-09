/**
 * Created by sheilstk on 6/6/16.
 */

'use strict';

angular.module('ginasWeb.apiFactory', ['ui.router','ngSanitize',
    'swaggerUi'])
.service('apiFactory', ['$rootScope', '$q', function ($rootScope, $q) {

    this.execute = function (req) {
        console.log(req);
        var username = $rootScope.username;
        var password = $rootScope.password;
        if (username && password) req.headers.Authorization = 'Basic ' + btoa(username + ':' + password);

        var deferred = $q.defer();
        deferred.resolve(true);
        return deferred.promise;
    }

}])
    .run(function (swaggerModules, apiFactory) {
        swaggerModules.add(swaggerModules.BEFORE_EXPLORER_LOAD, apiFactory);
    });


 /*   .factory('apiFactory', function ($http) {
        var api = [
            {
                name: 'root',
                desc: 'Entities are discoverable/browsable starting from the root of the API',
                url: '//ginas.ncats.nih.gov/ginas/app/api/v1/substances'
            }, {
                name: 'racemic',
                desc: 'Free text search for aspirin and filter out stereochemistry RACEMIC',
                url: '//ginas.ncats.nih.gov/ginas/app/api/v1/substances/search?q=%22aspirin%22&facet=SubstanceStereochemistry%2FRACEMIC'
            }, {
                name: 'fields',
                desc: 'This will give you all the facets',
                url: '//ginas.ncats.nih.gov/ginas/app/api/v1/substances/search'
            }, {
                name: 'autocompleteFields',
                desc: 'This will give you all the autocomplete fields',
                url: '//ginas.ncats.nih.gov/ginas/app/api/v1/suggest/@fields'
            }, {
                name: 'autocomplete',
                desc: 'So that you can do autocomplete such as:',
                url: '//ginas.ncats.nih.gov/ginas/app/api/v1/suggest/Name?q=gle'
            }, {
                name: 'substance',
                desc: 'Basic view of an individual substance (Aspirin)',
                url: '//ginas.ncats.nih.gov/ginas/app/api/v1/substances/8911c794-5da3-4934-a683-16d98d93db97'
            }, {
                name: 'substanceFull',
                desc: 'Full view of an individual substance (Aspirin)',
                url: '//ginas.ncats.nih.gov/ginas/app/api/v1/substances/8911c794-5da3-4934-a683-16d98d93db97?view=full'
            }, {
                name: 'render',
                desc: 'Structure rendering',
                url: '//ginas.ncats.nih.gov/ginas/app/img/8911c794-5da3-4934-a683-16d98d93db97.svg?size=400'
            }, {
                name: 'count',
                desc: 'Number of substances',
                url: '//ginas.ncats.nih.gov/ginas/app/api/v1/substances/@count'
            }
                ];

        var ApiFactory ={
            getCalls: function(){
           /!*     _.forEach(api, function (call) {
                    if(!call.results) {
                        $http.get(call.url, {cache: true}, {
                            headers: {
                                'Content-Type': 'text/plain'
                            }
                        }).then(function (response) {
                            _.set(call, 'results', response.data);
                        });
                    }
                });*!/


                return api;
            }
        };
        return ApiFactory;*/
    //});