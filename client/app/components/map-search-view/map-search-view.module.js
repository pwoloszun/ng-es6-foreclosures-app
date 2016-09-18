import angular from 'angular';

import ForeclosureDetailsModule from './foreclosure-details/foreclosure-details.module';
import MapSearchViewComponent from './map-search-view.component';

const MapSearchViewModule = angular.module('foreclosuresApp.components.mapSearchView', [
  ForeclosureDetailsModule.name
])
  .component('mapSearchView', MapSearchViewComponent);

export default MapSearchViewModule;