import angular from 'angular';

import NavigationComponent from "./navigation.component";

const NavigationModule = angular.module('foreclosuresApp.layout.navigation', [])
  .component('navigation', NavigationComponent);

export default NavigationModule;