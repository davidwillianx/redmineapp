(function(){
   'use strict';
   angular.module('redmine.data')
	   .factory('RedmineApiInterceptor', ApiInterceptor);

   ApiInterceptor.$inject = ['$injector'];
	
   function ApiInterceptor($injector){

	   return {
		   'responseError': _errorHandler
	   };



	   // concrete aplication 

	   function _errorHandler(error){
		if(error.status === 401){
                  console.log('still got unauthorized');  			
		  $injector.get('$state').go('access');
		  return;
		}
	   }
   }

})();
