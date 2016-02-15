(function(){
  'use strict';
  angular.module('redmine.task')
  .controller('Task', Task);


  Task.$inject = ['$scope', 'Chats', 'Issue'];

  function Task($scope, Chats, IssueProvider){
      var vm = this;
      vm.name = 'if yu love let me go';

      $scope.chats =  Chats.all()
      $scope.remove = function(chat) {
	  Chats.remove(chat);
      };


      init();




      // concrete construction 




      function init(){
	 IssueProvider.all()
	  .then(function(userIssues){
	    console.log('my issues');
	   console.log(userIssues);
	 });
      }

    }
})();
