'use strict';

/**
 * @ngdoc function
 * @name projectLeap3App.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the projectLeap3App
 */
angular.module('projectLeap3App')
  .controller('ProfileCtrl',  function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.greeting = 'Hello World!';
  });