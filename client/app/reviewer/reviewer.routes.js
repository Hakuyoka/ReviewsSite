'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('reviewer', {
    url: '/reviewer',
    template: '<main></main>'
  });
}
