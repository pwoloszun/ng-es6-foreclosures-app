import template from './rm-data-table.component.html';
import './rm-data-table.component.styl';

const DataTableComponent = {
  bindings: {
    items: "<",
    selectedItem: "<",
    headers: "<",
    itemClick: "&"
  },
  template
};

export default DataTableComponent;
