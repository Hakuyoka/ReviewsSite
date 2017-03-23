'use strict';

export default function routes($stateProvider) {
  'ngInject';
  console.log("timeLine")
  $stateProvider.state('timeLine', {
    url: '/timeLine',
    template: require('./timeLine.html'),
    controller: 'TimeLineController',
    controllerAs: "$ctrl"
  });
}
