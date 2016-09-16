import angular from 'angular';
import OtherComponent from './other.component';

const OtherModule = angular.module('foreclosuresApp.components.other', [])
  .component('other', OtherComponent);

export default OtherModule;