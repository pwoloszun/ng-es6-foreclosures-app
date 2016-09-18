import angular from 'angular';

import RmClickModule from './rm-click/rm-click.module';
import OtherComponent from './other.component';

const OtherModule = angular.module('foreclosuresApp.components.other', [
  RmClickModule.name
])
  .component('other', OtherComponent);

export default OtherModule;