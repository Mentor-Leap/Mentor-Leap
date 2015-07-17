'use strict';

/**
 * @ngdoc function
 * @name projectLeap3App.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the projectLeap3App
 */
angular.module('projectLeap3App')
  .controller('SignupCtrl',  function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.greeting = 'Hello World!';
  });