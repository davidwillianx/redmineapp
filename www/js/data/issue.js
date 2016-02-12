(function(){
  angular.module('redmine.data')
  .factory('Issue', Issue);

  Issue.$inject = ['$resource'];

  function Issue($resource){
    var issue = {
    	all: _getAllIssues
    };

    return issue;

    function _getAllIssues() {
      var issue  = $resource('http://redmine.tron.com.br:3000/issues.json',{},{
         all: {method: 'GET', isArray: false}
      });
      return issue.all().$promise;
    }
}
})();
