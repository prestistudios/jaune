'use strict';

/**
 * @ngdoc function
 * @name parfaitApp.controller:EditionCtrl
 * @description
 * # EditionCtrl
 * Controller of the parfaitApp
 */
angular
  .module('portfolioApp')
    .controller('EditionCtrl', ['$scope', function ($scope) {
    $scope.pieces = [
            {
              nom: 'Bilboquet Microbrasserie',
              image: '/images/bil-small.jpg',
              description: 'dsflkjdfddfksjldlfkj'
            },
            {
              nom: 'Spontanéous',
              image: 'images/spont-small.jpg'
            }

                    ]
                    ;

  }])
  ;
