'use strict';


class Content {

  fromUser = "";
  toUser = "";
  targetItem = "";
  id;
  isCollapsed = false;
  changeCollapsed = ()=> {
    this.isCollapsed = !this.isCollapsed
    return this.isCollapsed ? "expand" : "not_expand"
  }

  constructor(model){
    this.id = model.id
  }
}
export default class TimeLineController {
  $http;
  socket;
  awesomeThings = [];
  newThing = '';

  contents = [new Content({test:"test",id:0,isCollapsed:false}),{id:1,isCollapsed:false}];
  /*@ngInject*/
  constructor($http, $scope, socket) {
    console.log("timeLine Cotr",$http, $scope, socket)
  }
}

