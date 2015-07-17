'use strict';

/**
 * @ngdoc function
 * @name projectLeap3App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projectLeap3App
 */
angular.module('projectLeap3App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.greeting='hello';
  });
