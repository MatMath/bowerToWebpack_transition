'use strict';
// Global package
import angular from 'angular';
import ngAnimate from 'angular-animate';
import ngRoute from 'angular-route';

// Config
import { config } from './app.config';

// CSS
// import './bower_components/bootstrap/dist/css/bootstrap.css'; // That does not work and I have no idea why, Not the proper module to load it but... ????
import './app.css';
import './app.animations.css';

// Custom package
import { core } from './core/core.module';
import { phoneList } from './phone-list/phone-list.module';
import { phoneDetail } from './phone-detail/phone-detail.module';

// Define the `phonecatApp` module
const appModule = angular.module('phonecatApp', [
  'ngAnimate',
  'ngRoute',
  'core',
  'phoneList',
  'phoneDetail'
]);

appModule.config(['$locationProvider', '$routeProvider', config]);
