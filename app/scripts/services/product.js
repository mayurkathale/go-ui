'use strict';

/**
 * @ngdoc service
 * @name shopApp.apiService
 * @description
 * # apiService
 * Service in the shopApp.
 */
angular.module('shopApp')
    .service('productService', function ($http, $q, apiUrl) {

        this.getProduct = function () {
            return $http.get(apiUrl+'/product/list').then(function(response) {
                return response.data;
            });
        };
        this.getProductById = function (id) {
            return $http.get(apiUrl+'/product/'+id).then(function(response) {
                return response.data;
            });
        };
        this.getPriceByProduct = function(productId) {
            return $http.get(apiUrl+'/product/price/'+productId).then(function(response) {
                return response.data;
            });
        };
    });
