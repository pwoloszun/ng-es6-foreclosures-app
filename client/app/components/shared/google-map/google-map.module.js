import GoogleMapDirective from './google-map.directive';

const GoogleMapModule = angular.module('foreclosuresApp.components.shared.googleMap', [])
  .directive('googleMap', GoogleMapDirective);

export default GoogleMapModule;