/**
 * Created by kotato on 2017/03/21.
 */
import angular from 'angular';
import accordion from 'angular-ui-bootstrap/src/accordion';

export class SidebarComponent {
  oneAtATime = true;

  stars = ['★★★★★', '★★★★☆以上', '★★★☆☆以上', '★★☆☆☆以上', '★☆☆☆☆以上'];
  site = ['北海道・東北', '関東', '中部・北陸', '関西', '中部・四国', '九州・沖縄'];
  category = ["家電","パソコン","カメラ"];
  sex = ["男","女" ];

  isLoggedIn: Function;
  isAdmin: Function;
  getCurrentUser: Function;

  status = {
    isCustomHeaderOpen: true,
    isItemCategoryOpen: true,
    isItemReviewOpen: true,
    isSiteOpen: true,
    isSexOpen: true,
    isFirstOpen: true,
    isFirstDisabled: true
  };


  constructor(Auth) {
    'ngInject';

    this.isLoggedIn = Auth.isLoggedInSync;
    this.isAdmin = Auth.isAdminSync;
    this.getCurrentUser = Auth.getCurrentUserSync;

  }

}



export default angular.module('directives.sidebar', [accordion])
  .component('sidebar', {
    template: require('./sidebar.html'),
    controller: SidebarComponent
  })
  .name;
