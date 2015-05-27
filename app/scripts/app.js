'use strict';

angular
  .module('portfolioApp', [
    'ngAnimate',
    'ngResource',
    'ngTouch',
    'ui.router'

  ])
  .config(function ($urlRouterProvider, $locationProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('index', {
        url: '/',
        templateUrl: 'views/main.html'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .state('edition', {
        url: '/edition',
        templateUrl: 'views/edition.html',
        controller: 'EditionCtrl'
    })
      .state('identite', {
        url: '/identite',
        templateUrl: 'views/identite.html',
        controller: 'IdentiteCtrl'
      })
      .state('typo', {
        url: '/typo',
        templateUrl: 'views/typo.html',
        controller: 'TypoCtrl'
    });


      $locationProvider.html5Mode(true);
  })
  ;
