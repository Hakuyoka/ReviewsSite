'use strict';

import angular from 'angular';
import routes from './admin.routes';
import AdminController from './admin.controller';
console.log("admin index")
export default angular.module('reviewrsApp.admin', ['reviewrsApp.auth', 'ui.router'])
  .config(routes)
  .controller('AdminController', AdminController)
  .name;
