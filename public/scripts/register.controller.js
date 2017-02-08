angular.module('passportApp')
.controller('RegisterController', function ($http, $location) {
// 'RegisterController' must match in other files.


  console.log('RegisterController loaded');
  var ctrl = this;

  ctrl.register = function() {
    console.log('registering');
    $http.post('/register', {
      username: ctrl.username,
      password: ctrl.password
    }).then(function(response){
      console.log(response);

      // simulate clicking on an anchor tag that would take us home.
      $location.path('/home');

    }, function(error) {
      console.log('error loggin in', error);
    });
  };

}); // closes
