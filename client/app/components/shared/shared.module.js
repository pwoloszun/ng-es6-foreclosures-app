import angular from 'angular';

import DataTableModule from './rm-data-table/rm-data-table.module';
import GoogleMapModule from './google-map/google-map.module';

const SharedModule = angular.module('foreclosuresApp.components.shared', [
  DataTableModule.name,
  GoogleMapModule.name
]);

export default SharedModule;
