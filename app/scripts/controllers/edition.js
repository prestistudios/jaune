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
    .controller('EditionCtrl', function ($scope) {
    $scope.pieces = [
            {
              nom: 'Bilboquet Microbrasserie',
              image: '/images/bil-small.jpg',
              description: 'dsflkjdfddfksjldlfkj',
              categorie: 'editiun'
            },
            {
              nom: 'Spontanéous',
              image: 'images/spont-small.jpg',
              description: 'dsflkjdfddfujldlfkj',
              categorie: 'edition'
            }

                    ]
                    ;

  })
  ;
