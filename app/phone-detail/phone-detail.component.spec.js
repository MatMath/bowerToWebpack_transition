'use strict';
var lowdash = {};
describe('phoneDetail', function() {

  // Load the module that contains the `phoneDetail` component before each test
  beforeEach(function(){
    module('phoneDetail');
    module('ngLodash');
  });

  // Test the controller
  describe('PhoneDetailController', function() {
    var $httpBackend, ctrl;
    var xyzPhoneData = {
      name: 'phone xyz',
      images: ['image/url1.png', 'image/url2.png']
    };

    beforeEach(inject(function($componentController, _$httpBackend_, $routeParams, _lodash_) {
      $httpBackend = _$httpBackend_;
      _ = _lodash_;
      $httpBackend.expectGET('phones/xyz.json').respond(xyzPhoneData);

      $routeParams.phoneId = 'xyz';

      ctrl = $componentController('phoneDetail');
    }));

    it('should fetch the phone details', function() {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.phone).toEqual({});

      $httpBackend.flush();
      expect(ctrl.phone).toEqual(xyzPhoneData);
    });

  });

});
