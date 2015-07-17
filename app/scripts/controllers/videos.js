'use strict';

/**
 * @ngdoc function
 * @name projectLeap3App.controller:VideosCtrl
 * @description
 * # VideosCtrl
 * Controller of the projectLeap3App
 */
angular.module('projectLeap3App')
  .controller('VideosCtrl',  function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.greeting = 'Hello World!';
  });