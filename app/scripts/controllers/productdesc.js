'use strict';

/**
 * @ngdoc function
 * @name shopApp.controller:HistoryCtrl
 * @description
 * # HistoryCtrl
 * Controller of the shopApp
 */
angular.module('shopApp')
    .controller('ProductDescCtrl', function ($scope, $rootScope, $state, $stateParams, productService, productAttributeService) {
        $scope.product = [];
        $scope.papertype = [];
        $scope.paperformat = [];
        $scope.productAttr = {};
        $scope.priceTable = [];
        $scope.dates = [];
        $scope.qtyrows = [];
        $scope.showTable = false;
        productService.getProductById($stateParams.id).then(function(data){
            $scope.product = data.result;
        });
        productAttributeService.getPaperType().then(function(data){
            $scope.papertype = data.result;
        });
        productAttributeService.getPaperFormat().then(function(data){
            $scope.paperformat = data.result;
        });
        $scope.getPriceByProduct = function() {
            productService.getPriceByProduct($stateParams.id).then(function(data){
                if(data.code === 0) {
                    $scope.showTable = true
                    $scope.qtyrows = Object.keys(data.result);
                    $scope.dates = Object.keys(data.result[$scope.qtyrows[0]]);
                    $scope.priceTable = data.result;
                }
            });
        };
        /*$scope.renderPriceTable = function(priceData) {

        };*/
    });
