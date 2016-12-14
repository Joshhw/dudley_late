'use strict';

(function() {

  class MainController {

    constructor(Users) {
      Users.query({"role": "student"}).$promise.then(data => {
        console.log(data);
        this.students = data;
      });
    }
  }

  angular.module('tTimeApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController,
      controllerAs: 'vm'
    });
})();
