import angular from 'angular';
import foreclosuresRepositoryFactory from './foreclosures.repository';
import foreclosuresServiceFactory from './foreclosures.service';

const CommonModule = angular.module('foreclosuresApp.common', [])
  .factory('foreclosuresRepository', foreclosuresRepositoryFactory)
  .factory('foreclosuresService', foreclosuresServiceFactory);

export default CommonModule;
