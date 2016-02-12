(function(){
  angular.module('redmine.data')
   .factory('User', User);

  User.$inject = ['$resource'];

  function User($resource) {
    var user = {
      login: _access
    }

    return user;


    function _access(user) {
      var userRedmine =
      $resource('http://redmine.tron.com.br:3000/login', {}, {
	login : {
	  method: 'POST', isArray: false,
	  transformResponse: function (resposeData, headers) {
	    var resposeHeaders = headers();
	    return resposeData;
	  }
	}
      });

      return userRedmine.login(user).$promise;
    }
}
})();
