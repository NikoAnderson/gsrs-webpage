	/*
	 * Orange angular-swagger-ui - v0.4.0
	 *
	 * (C) 2015 Orange, all right reserved
	 * MIT Licensed
	 */
    'use strict';

angular
    .module('swaggerUiAuthorization', ['swaggerUi', 'ui.bootstrap.modal'])
    .service('swaggerUiAuth', function ($q, $uibModal) {

        /**
         * Module entry point
         */
        this.execute = function (operation, auth) {
            var deferred = $q.defer();
            $uibModal.open({
                templateUrl: './assets/angular-swagger-ui-master/src/templates/auth/modal-auth.html',
                controller: 'SwaggerUiModalAuthCtrl',
                backdrop: true,
                resolve: {
                    auth: function () {
                        auth[0].apiKey = 'apitester';
                        auth[1].apiKey = 'ATtW0TqPjSuqzSnyqW8n';
                        return auth;
                    },
                    operation: function () {
                        return operation;
                    }
                }
            });
            deferred.resolve(true);
            return deferred.promise;
        };

    })
    .controller('SwaggerUiModalAuthCtrl', function ($scope, operation, auth) {
        $scope.form = {};
        $scope.auth = auth;
        $scope.tab = 0;
        $scope.auth[0].apiKey = 'apitester';
        $scope.auth[1].apiKey = 'ATtW0TqPjSuqzSnyqW8n';
        var authParams = operation.authParams || auth;
        if (authParams) {
            switch (authParams.type) {
                case 'apiKey':
                    $scope.form.apiKey = authParams.apiKey;
                    break;
                case 'basic':
                    $scope.form.basicLogin = authParams.login;
                    $scope.form.basicPassword = authParams.password;
                    break;
            }
        }

        $scope.authorize = function () {
            authParams = operation.authParams = auth;
            _.forEach(authParams, function (param) {
                param.valid = true;
            });
            $scope.$close();
        };
    })
    .run(function (swaggerModules, swaggerUiAuth) {
        swaggerModules.add(swaggerModules.AUTH, swaggerUiAuth);
    });