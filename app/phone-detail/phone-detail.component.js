'use strict';
import lodash from 'lodash';
import 'angular-route';

const phoneDetailCmpt = {
  templateUrl: 'phone-detail/phone-detail.template.html',
  controller: ['$routeParams', 'Phone', 'lodash',
    function PhoneDetailController($routeParams, Phone, _) {
      var self = this;
      self.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
        self.setImage(phone.images[0]);
      });

      self.setImage = function setImage(imageUrl) {
        self.mainImageUrl = imageUrl;
      };
    }
  ]
}

export { phoneDetailCmpt };
