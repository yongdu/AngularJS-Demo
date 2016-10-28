// create the module
var myapp = angular.module("myModule",[]);

// create the controller and registering the module all done in one line
myapp.controller("myController", function($scope)
	{
		var employee = {

        gender: 'Male'
		};

		$scope.employee = employee;
		
		$scope.message ="AngularJs Tutorial";
		
		
	}
);