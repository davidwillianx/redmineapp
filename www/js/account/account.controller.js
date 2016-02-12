(function(){
  'use strict';

  angular.module('redmine.account')
  .controller('Account', Account);

  Account.$inject = ['$scope'];


  function Account($scope){

    $scope.settings = {
      enableFriends: true
    };
  
  }

})();
