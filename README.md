
#AngularJS-Demo


A collection of simple demos of AngularJS-Demo.

##Demos Part

### Demo 1

1. Module
	* what is a module  
	```
		[a container for the different of an app including controller, services,filters, directives which configures the Injector][Conceptual Overview]
	```
	* how to create a module  
	```
		var myApp = angular.module("ModuleName", [])
	```
2. Controller
    * what is a controller
	```
		[the business logic behind views, usually defined by a Javascript constructor function to augument the Angular Scope][Conceptual Overview]
	```
	* how to create a cotroller
	```
	myApp.controller('GreetingController', ['$scope', function($scope) {$scope.greeting = 'Hola!';}]);
	```
	
	
	
	
	
## For more information, please check out: http://angularjs.org/

[Conceptual Overview]: https://docs.angularjs.org/guide/concepts


