'use strict';
import angular from 'angular';

// custom
import { checkmark } from './checkmark/checkmark.filter';
import { corePhone } from './phone/phone.module';

// Define the `core` module
const core = angular.module('core', [ 'corePhone' ]);
core.filter('checkmark', checkmark);

export { core };
