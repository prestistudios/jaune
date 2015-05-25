'use strict';

describe('Controller: EditionCtrl', function () {

  // load the controller's module
  beforeEach(module('parfaitApp'));

  var EditionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditionCtrl = $controller('EditionCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
