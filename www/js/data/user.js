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
	  headers : {'Content-Type': 'application/x-www-form-urlencoded'},
	  transformResponse: function (responseData, headers) {
	    var responseHeaders = headers();
	    console.log('i dont thing that is a good idea get all headrs');
	    console.log(responseHeaders);
	    return responseData;
	  }
	}
      });

      console.log('bad romance');
      console.log(user);
      return userRedmine.login(user).$promise;
    }
}
})();
