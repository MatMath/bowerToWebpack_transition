'use strict';

const phone = function($resource) {
  return $resource('phones/:phoneId.json', {}, {
    query: {
      method: 'GET',
      params: {phoneId: 'phones'},
      isArray: true
    }
  });
};

export { phone };
