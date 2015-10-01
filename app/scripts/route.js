angular.module('myApp' , ['ui.router'])

  .config(function($stateProvider, $urlRouterProvider) {
	  $urlRouterProvider.otherwise('/list1');
	  $stateProvider
	  .state('list1', {
		url: '/list1', 
		templateUrl: 'list1.html',
		//controller: 'MyController'
	  })
	  .state('list2', {
		url: '/list2',
	   templateUrl: 'list2.html',
	   //controller : 'List2Ctrl'
	  })
	  .state('list3', {
		  url: '/list3',
		templateUrl: 'list3.html',
		//controller: 'List3Ctrl'
	  })
	
});