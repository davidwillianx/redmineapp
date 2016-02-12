(function(){
  'use strict';
  angular.module('redmine.task')
  .controller('Task', Task);


  Task.$inject = ['$scope', 'Chats'];

  function Task($scope, Chats){
    $scope.chats = Chats.all();
    $scope.remove = function(chat) {
      Chats.remove(chat);
    };
  }

})();
