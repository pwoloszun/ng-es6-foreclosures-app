import angular from 'angular';

import FooterComponent from "./footer.component";

const FooterModule = angular.module('foreclosuresApp.layout.footer', [])
  .component('footer', FooterComponent);

export default FooterModule;