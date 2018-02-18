/**
 * The main app module
 *
 * @type {angular.Module}
**/

require('angular');
require('angular-route');
require('angular-ui-bootstrap');
require('lodash');
require('angular-sanitize');
require('angular-google-analytics');
require('../../dist/templateCachePartials');

// Initialize Firebase
var firebase = require('firebase');
require('angularfire');
var config = require('../../dist/config/fb-config.json');
firebase.initializeApp(config);

angular.module('agamemnon', ['ngRoute', 'partials', 'ui.bootstrap', 'ngSanitize', 'firebase', 'angular-google-analytics'])
.config(function($locationProvider, $routeProvider) {  
  "use strict";

  $locationProvider.html5Mode(true).hashPrefix('');

  $routeProvider
    .when('/', {
      templateUrl: '/partials/home.html',
      controller: 'HomeCtrl'
    })      
    .otherwise({
      redirectTo: "/"
    });

});

angular.module('agamemnon')
.config(function (AnalyticsProvider) {      
   // AnalyticsProvider.setAccount('');
}).run(function(Analytics) { });

require('partialControllers');
require('templateControllers');
require('directives');
require('services');


