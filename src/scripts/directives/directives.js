angular.module('agamemnon')
.directive('nav', function () {
  'use strict';

  return {
    restrict: 'A', // C: class, E: element, M: comments, A: attributes
    replace: false, // replaces original content with template
    templateUrl: '/partials/_nav.html',
    controller: 'NavCtrl'
  }
});

angular.module('agamemnon')
.directive('header', function () {
	'use strict';

  return {
    restrict: 'A', // C: class, E: element, M: comments, A: attributes
    replace: false, // replaces original content with template
    templateUrl: '/partials/_header.html',
    controller: 'HeaderCtrl'
  }
});

angular.module('agamemnon')
.directive('footer', function () {
  return {
    restrict: 'A', // C: class, E: element, M: comments, A: attributes
    replace: false, // replaces original content with template
    templateUrl: '/partials/_footer.html',
    controller: 'FooterCtrl'
  }
});
