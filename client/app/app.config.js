const AppConfig = function ($stateProvider, $urlRouterProvider) {
  'ngInject';

  // $locationProvider.html5Mode(true); // enable HTML5 routing

  $stateProvider.state('dashboard', {
    url: "/",
    template: "<dashboard></dashboard>"
  });

  // TODO: add states:
  // other
  // data-table
  // google-map
  // map-search

  $urlRouterProvider.otherwise('/');
};

export default AppConfig;
