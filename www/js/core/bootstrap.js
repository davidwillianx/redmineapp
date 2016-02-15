(function(){
  'use strict';
  angular.module('redmine.core',
    ['ionic', 'ngResource', 'redmine.properties'])

  .run(['$ionicPlatform', 'Ini', function($ionic, ini){
      ini.bootstrap($ionic);
  }])
})();
