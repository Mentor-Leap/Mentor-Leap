'use strict';

/**
 * @ngdoc overview
 * @name projectLeap3App
 * @description
 * # projectLeap3App
 *
 * Main module of the application.
 */
angular
  .module('projectLeap3App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/homepage.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
        })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
        })
      .when('/videos', {
        templateUrl: 'views/videos.html',
        controller: 'VideosCtrl'
        })
      .when('/search', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl'
        })
      .when('/mentor', {
        templateUrl: 'views/mentor.html',
        controller: 'MentorCtrl'
      });
  });
