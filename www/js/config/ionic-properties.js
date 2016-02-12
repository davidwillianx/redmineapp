(function(){
  'use strict';
  angular.module('redmine.properties', [])
  .factory('Ini', Ini);

  function Ini(){

    var configs = {
      bootstrap: _bootstrap,
    };


    return configs;

    

/// configuration concrete process

    function _bootstrap ($ionicPlatform){
      $ionicPlatform.ready(function(){
         if (window.cordova 
	     && window.cordova.plugins 
	     && window.cordova.plugins.Keyboard) {

            cordova.plugins
	     .Keyboard
	     .hideKeyboardAccessoryBar(true);
            cordova.plugins
	    .Keyboard.disableScroll(true);
         }

         if (window.StatusBar) {
            // org.apache.cordova.statusbar required
             StatusBar.styleDefault();
          }
        });
    }

  }

})();
