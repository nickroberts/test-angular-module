import * as angular from 'angular';

export * from './header.component';

export const testAngularHeaderModule = angular
  .module('testAngularModule.header', [])
  .name;
