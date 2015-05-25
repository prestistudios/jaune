'use strict';

describe('Controller: TypoCtrl', function () {

  // load the controller's module
  beforeEach(module('parfaitApp'));

  var TypoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TypoCtrl = $controller('TypoCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
