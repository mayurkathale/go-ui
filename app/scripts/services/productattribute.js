'use strict';

/**
 * @ngdoc service
 * @name shopApp.apiService
 * @description
 * # apiService
 * Service in the shopApp.
 */
angular.module('shopApp')
    .service('productAttributeService', function ($http, $q, apiUrl) {

        this.getPaperType = function () {
            return $http.get(apiUrl+'/papertype/list').then(function(response) {
                return response.data;
            });
        };
        this.getPaperFormat = function () {
            return $http.get(apiUrl+'/paperformat/list').then(function(response) {
                return response.data;
            });
        };
    });
