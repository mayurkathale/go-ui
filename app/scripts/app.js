'use strict';

/**
 * @ngdoc overview
 * @name shopApp
 * @description
 * # shopApp
 *
 * Main module of the application.
 */
angular
  .module('shopApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    /*'ngSanitize',*/
    'ngTouch',
    'uiGmapgoogle-maps',
    'satellizer',
    'angular-cache',
    'ui.router'
  ])
  .config(function ($routeProvider, $stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
    $stateProvider
        .state('main', {
            templateUrl: 'views/partials/content.html',
            controller: 'ProductListingCtrl',
            url: '/'
        })
        .state('product', {
            templateUrl: 'views/partials/product.html',
            controller: 'ProductDescCtrl',
            url: 'product/:id'
        });
  })
  .constant('apiUrl', 'http://api.mayurkathale.com/api');
