'use strict';
// Global package
import angular from 'angular';
import ngAnimate from 'angular-animate';
import ngRoute from 'angular-route';

// Config
import { config } from './app.config';

// Custom package
const core = require('./core/core.module');
const phoneDetail = require('./phone-detail/phone-detail.module');
const phoneList = require('./phone-list/phone-list.module');

// Define the `phonecatApp` module
const appModule = angular.module('phonecatApp', [
  'ngAnimate',
  'ngRoute',
  'core',
  'phoneDetail',
  'phoneList'
]);
appModule.config(['$locationProvider', '$routeProvider', config]);


// https://github.com/angular/angular.io/blob/master/public/docs/_examples/upgrade-module/ts/src/app/divide-routes/app.module.ts
