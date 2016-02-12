(function(){
  'use strict';
  angular.module('redmine.core',
    ['ionic', 'redmine.properties'])

  .run(['$ionicPlatform', 'Ini', function($ionic, ini){
      ini.bootstrap($ionic);
  }]);

})();
