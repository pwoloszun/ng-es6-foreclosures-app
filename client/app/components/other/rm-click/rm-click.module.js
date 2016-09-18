import angular from 'angular';

import RmClickDirective from './rm-click.directive';

const RmClickModule = angular.module('foreclosuresApp.components.other.rmClick', [])
  .directive('rmClick', RmClickDirective);

export default RmClickModule;