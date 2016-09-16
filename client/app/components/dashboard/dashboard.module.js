import angular from 'angular';

import DashboardComponent from './dashboard.component';

const DashboardModule = angular.module('foreclosuresApp.components.dashboard', [])
  .component('dashboard', DashboardComponent);

export default DashboardModule;