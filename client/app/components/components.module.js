import angular from 'angular';

import DashboardModule from './dashboard/dashboard.module';
import OtherModule from './other/other.module';
// import DataTableViewModule from './data-table-view/data-table-view.module';
// import GoogleMapViewModule from './google-map-view/google-map-view.module';
import MapSearchViewModule from './map-search-view/map-search-view.module';

import SharedModule from './shared/shared.module';

const ComponentsModule = angular.module('foreclosuresApp.components', [
  DashboardModule.name,
  OtherModule.name,
  // DataTableViewModule.name,
  // GoogleMapViewModule.name,
  MapSearchViewModule.name,
  SharedModule.name
]);

export default ComponentsModule;
