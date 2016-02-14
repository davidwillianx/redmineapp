(function(){
  'use strict';
  angular.module('redmine.access')
  .controller('Access', Access);

  Access.$inject = ['$scope', 'User', '$state'];

  function Access($scope, UserProvider, $state){
	  var vm = this;

	  vm.signIn  = _access;


	  /// concrete execution


	  function _access(userToAccess){
		  UserProvider.login(userToAccess)
			  .then(function(accessStatus){
				  $state.go('tab.chats');
			  });
	  }
  }

})();
