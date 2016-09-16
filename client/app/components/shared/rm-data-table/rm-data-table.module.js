import DataTableComponent from './rm-data-table.component';

const DataTableModule = angular.module('foreclosuresApp.components.shared.rmDataTable', [])
  .component('rmDataTable', DataTableComponent);

export default DataTableModule;