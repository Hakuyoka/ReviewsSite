'use strict';
/* eslint no-sync: 0 */

import angular from 'angular';

export class NavbarComponent {
  menu = [
    {
      title: 'タイムライン',
      state: 'main'
    },
    {
      title: 'お知らせ',
      state: 'main'
    },
    {
      title: 'フォロー',
      state: 'main'
    },
    {
      title: '詳細検索',
      state: 'main'
    },
    {
      title: 'メッセージ',
      state: 'main'
    },
    {
      title: 'レビュー投稿',
      state: 'main'
    },
    {
      title: 'その他',
      state: 'main'
    }
  ];
  isLoggedIn: Function;
  isAdmin: Function;
  getCurrentUser: Function;
  isCollapsed = true;

  constructor(Auth) {
    'ngInject';

    this.isLoggedIn = Auth.isLoggedInSync;
    this.isAdmin = Auth.isAdminSync;
    this.getCurrentUser = Auth.getCurrentUserSync;
  }

}



export default angular.module('directives.navbar', [])
  .component('navbar', {
    template: require('./navbar.html'),
    controller: NavbarComponent
  })
  .name;
