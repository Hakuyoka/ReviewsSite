'use strict';

export function routeConfig($urlRouterProvider, $locationProvider, $stateProvider) {
  'ngInject';

  $urlRouterProvider
    .otherwise('/');

  $stateProvider
    //ページ毎にここに追加
    .state("sample",{
      //アクセスするURL
      url : "/sample",
      //アクセスするHTML
      templateUrl: "./app/sample/sample.html",
      controller : function ($scope) {
        //HTML内で宣言した変数に文字を代入
        $scope.title = "Hello Sample"
      }
    })
    .state("reviewer",{
      url : "/reviewer",
      templateUrl: "./app/reviewer/reviewer.html",
      controller : function ($scope) {
        $scope.title = "Hello Reviewrs"
      }
    })

}
