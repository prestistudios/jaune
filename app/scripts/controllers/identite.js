'use strict';

/**
 * @ngdoc function
 * @name parfaitApp.controller:IdentiteCtrl
 * @description
 * # IdentiteCtrl
 * Controller of the parfaitApp
 */
angular.module('portfolioApp')
  .controller('IdentiteCtrl',['$scope', '$rootScope', function ($scope, $rootScope)  {
      $rootScope.titre = 'Identité';
  }]);
