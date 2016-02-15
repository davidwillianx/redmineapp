(function(){
  'use strict';

  angular.module('redmine.data', [])
	  .config(HttpInterceptor);


  HttpInterceptor.$inject = ['$httpProvider'];


  function HttpInterceptor($httpProvider) {
	  $httpProvider.interceptors.push('RedmineApiInterceptor');
  }

})();
