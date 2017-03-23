/**
 * Created by kotato on 2017/03/23.
 */
'use strict';

import angular from 'angular';
import routes from './timeLine.routes';
import TimeLineController from './timeLine.controller';
console.dir("index")
export default angular.module('reviewrsApp.timeLine', ['reviewrsApp.auth', 'ui.router'])
  .config(routes)
  .controller('TimeLineController', TimeLineController)
  .name;
