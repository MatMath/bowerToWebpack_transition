'use strict';
import ngResource from 'angular-resource';
import angular from 'angular';

import { phone } from './phone.service.js';

// Define the `core.phone` module
const corePhone = angular.module('corePhone', ['ngResource']);
corePhone.factory('Phone', ['$resource', phone]);

export { corePhone };
