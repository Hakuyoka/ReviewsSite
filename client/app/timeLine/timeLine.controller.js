'use strict';


class Content {

  fromUser = "";
  toUser = "";
  targetItem = "";

  constructor(){

  }
}
export default class TimeLineController {
  $http;
  socket;
  awesomeThings = [];
  newThing = '';

  contents = [{test:"test"},{}];
  /*@ngInject*/
  constructor($http, $scope, socket) {
    console.log("timeLine Cotr",$http, $scope, socket)
  }
}

