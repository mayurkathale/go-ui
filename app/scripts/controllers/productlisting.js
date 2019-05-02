'use strict';

/**
 * @ngdoc function
 * @name shopApp.controller:HistoryCtrl
 * @description
 * # HistoryCtrl
 * Controller of the shopApp
 */
angular.module('shopApp')
    .controller('ProductListingCtrl', function ($scope, $rootScope, productService) {
        $scope.products = [];
        productService.getProduct().then(function(data){
            $scope.products = data.result;
        });
        $scope.search = function (q) {
            $rootScope.$emit("CallSearchMethod", {q:q});
        };
        $rootScope.$on("updateHistory", function(event, data){
            $scope.history = data.history;
        });
    });
