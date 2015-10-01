		
		// JavaScript Document
        'use strict';
		angular.module('myApp') 
           .controller('List2Ctrl', function($scope, $localStorage) {
                $scope.seconddata = {};
				if ($localStorage.secondtasks) {
					$scope.secondtasks = $localStorage.secondtasks;
				} else {
					$scope.secondtasks = [ 'Task 4', 'Task 5', 'Task 6' ];
				}
				
				
                $scope.addTask = function() {
                    $scope.secondtasks.push($scope.seconddata.secondtask);
					$localStorage.secondtasks = $scope.secondtasks;
					
					$scope.seconddata.secondtask = "";
                }
                $scope.removeTask = function(index) {
                    $scope.secondtasks.splice(index, 1);
					$localStorage.secondtasks = $scope.secondtasks;
					
                }
                
        });