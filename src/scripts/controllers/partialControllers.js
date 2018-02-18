require('angular');
var firebase = require('firebase');

/******** Partials ********/
angular.module('agamemnon')
.controller('NavCtrl', function ($scope) {
	'use strict';

	$scope.isCollapsed = true;
	
	$scope.closeNav = function() {
		$scope.isCollapsed = true;			
	};

	$scope.menu = [				
	];
    
});

angular.module('agamemnon')
.controller('FooterCtrl', function ($scope) {
	'use strict';

	$scope.date = new Date();
    
});

angular.module('agamemnon')
.controller('HeaderCtrl', function ($scope, $uibModal, $log, $firebaseAuth) {	
	'use strict';

	var db = firebase.database();

	$scope.auth = $firebaseAuth(firebase.auth());	

	$scope.contact = function() {	

		var modalInstance = $uibModal.open({
	    animation: true,
	    templateUrl: '/partials/_contact.html',
	    controller: 'ContactCtrl',
	    size: 'md'
		});  	

		modalInstance.result.then(function(result) {

			$scope.auth.$signInAnonymously().then(function(firebaseUser) {
				
				var newMsgKey = firebase.database().ref().child('messages').push().key;
				firebase.database().ref().child('/messages/' + newMsgKey).set(result);      	

				var successModal = $uibModal.open({
			    animation: true,
			    templateUrl: '/partials/_outcome.html',
			    controller: 'OutcomeCtrl',
			    size: 'md',
			    resolve: {
            outcome: function() {
                return true;
            }
        },
				});

				$scope.auth.$signOut();				

		  }).catch(function(error) {

		  	console.log("Authentication failed:", error);

		  	var errorModal = $uibModal.open({
			    animation: true,
			    templateUrl: '/partials/_outcome.html',
			    controller: 'OutcomeCtrl',
			    size: 'md',
			    resolve: {
            outcome: function() {
                return false;
            }
        	},
				}); 		    
		  });
			
	  }, function() {
	    $log.info('Modal dismissed at: ' + new Date());
	  });
	}
    
});

angular.module('agamemnon')
.controller('ContactCtrl', function ($scope, $uibModalInstance) {
	'use strict';

	$scope.user = {};

	$scope.submitForm = function(isValid) {		
		if(isValid) {
			if(!$scope.user.company)
				$scope.user.company = "";
			if(!$scope.user.message)
				$scope.user.message = "";
    	$uibModalInstance.close($scope.user);
		}
  };

  $scope.cancel = function() {
    $uibModalInstance.dismiss('cancel');
  };
        
});

angular.module('agamemnon')
.controller('OutcomeCtrl', function ($scope, $uibModalInstance, outcome) {
	'use strict';

	$scope.success = outcome;
	
	$scope.cancel = function() {
    $uibModalInstance.dismiss('cancel');
  };
    
});

