'use strict';

angular.module("tTimeApp")
  .factory('Users', $resource => {
  return $resource('api/users/:id', {id: '@id'}, {});
});
