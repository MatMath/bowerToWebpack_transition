'use strict';
import angular from 'angular';
import ngRoute from 'angular-route';

import { corePhone } from '../core/core.module';
import { phoneDetailCmpt } from './phone-detail.component';

// Define the `phoneDetail` module
const phoneDetail = angular.module('phoneDetail', [ 'ngRoute', 'corePhone' ]);
phoneDetail.component('phoneDetailCmpt', phoneDetailCmpt)

console.log('phoneDetailCmpt', phoneDetailCmpt);

export { phoneDetail };
