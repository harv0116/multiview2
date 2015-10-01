// JavaScript Document
        'use strict';
		angular.module('myApp') 
           .controller('MyController', function($scope, $localStorage) {
                $scope.data = {};
				
				if ($localStorage.tasks) {
					$scope.tasks = $localStorage.tasks;
				} else {
					$scope.tasks = [ 'Task 1', 'Task 2', 'Task 3' ];
				}
				
				
                $scope.addTask = function() {
                    $scope.tasks.push($scope.data.task);
					$localStorage.tasks = $scope.tasks;
					
					$scope.data.task = "";
                }
                $scope.removeTask = function(index) {
                    $scope.tasks.splice(index, 1);
					$localStorage.tasks = $scope.tasks;
					
                }
                
        });