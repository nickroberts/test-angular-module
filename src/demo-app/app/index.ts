import * as angular from 'angular';
// import * as testAngularModule from '../../../dist';
import { testAngularModule } from '../../lib';
import { DemoAppComponent } from './components/demoApp';

angular
  .module('testAngularModuleApp', [testAngularModule])
  .component('demoApp', new DemoAppComponent())

