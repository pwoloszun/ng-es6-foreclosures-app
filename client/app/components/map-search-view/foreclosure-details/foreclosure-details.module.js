import angular from 'angular';
import ForeclosureDetailsComponent from './foreclosure-details.component';

const ForeclosureDetailsModule = angular.module('foreclosuresApp.components.mapSearchView.foreclosureDetails', [])
  .component('foreclosureDetails', ForeclosureDetailsComponent);

export default ForeclosureDetailsModule;