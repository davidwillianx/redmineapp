(function(){
  'use strict';	

  angular.module('redmine.core')
  .config(
    ['$stateProvider', '$urlRouterProvider', 
     function($stateProvider, $urlRouterProvider){

       $stateProvider
       
      .state('tab', {
	url: '',
	abstract: true,
	templateUrl: 'templates/tabs.html'
       })

    // Each tab has its own nav history stack:

      .state('tab.dash', {
	url: '/dash',
	views: {
	  'tab-dash': {
	    templateUrl: 'templates/tab-dash.html',
	    controller: 'History'
	  }
	}
      })

      .state('tab.chats', {
	  url: '/tasks',
	  views: {
	    'tab-chats': {
	      templateUrl: 'templates/tab-chats.html',
	      controller: 'Task'
	    }
	  }
	})

	.state('tab.chat-detail', {
	  url: '/chats/:chatId',
	  views: {
	    'tab-chats': {
	      templateUrl: 'templates/chat-detail.html',
	      controller: 'ChatDetailCtrl'
	    }
	  }
	})

	.state('tab.account', {
	  url: '/account',
	  views: {
	    'tab-account': {
	      templateUrl: 'templates/tab-account.html',
	      controller: 'Account as vm'
	    }
	 }
       })


       .state('access',{
	 url: '/access',
	 templateUrl: 'js/access/index.html',
	 controller: 'Access'
       });

  // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('tasks');

    }]);

})();
