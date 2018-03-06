'use strict';
import angular from 'angular';
import { corePhone } from '../core/core.module';

import { phoneListCtrl } from './phone-list.component';

// Define the `phoneList` module
const phoneList = angular.module('phoneList', ['corePhone']);
phoneList.component('phoneList', phoneListCtrl)

console.log('phoneList:', phoneList);

export { phoneList };
