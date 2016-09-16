import _ from "lodash";

const foreclosuresRepositoryFactory = function ($http) {
  'ngInject';

  function getAll(onFulfilled) {
    let deferred = $http({method: "GET", url: "data/foreclosures.json"});
    deferred.success(function (realEstates) {
      _(realEstates).each(function (realEstate) {
        realEstate.builtAt = new Date(realEstate.builtAt);
      });
      onFulfilled(realEstates);
    });
    deferred.error(function (err) {
      console.error(err);
    });
    return deferred.promise;
  }

  return {
    getAll: getAll
  };
};

export default foreclosuresRepositoryFactory;
