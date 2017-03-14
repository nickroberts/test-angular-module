import * as angular from 'angular';

export const testAngularModule = angular
  .module('testAngularModule', [
    'testAngularModule.header',
    'testAngularModule.footer',
  ])
  .name;
