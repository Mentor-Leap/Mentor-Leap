'use strict';

/**
 * @ngdoc function
 * @name projectLeap3App.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the projectLeap3App
 */
angular.module('projectLeap3App')
  .controller('LoginCtrl',  function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.greeting = 'Hello World!';
  });