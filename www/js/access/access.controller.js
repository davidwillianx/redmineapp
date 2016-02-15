(function(){
  'use strict';
  angular.module('redmine.access')
  .controller('Access', Access);


  Access.$inject = ['$scope'];
  

  function Access($scope){
    var vm = this;
    vm.name = 'atividade';

    vm.signIn = function(){
      console.log('fdsafsadkj');
    };
  
  }
})();
