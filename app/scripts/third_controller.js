	
		// JavaScript Document
        'use strict';
		angular.module('myApp') 
           .controller('List3Ctrl', function($scope, $localStorage) {
				$scope.thirddata = {};
				if ($localStorage.thirdtasks) {
					$scope.thirdtasks = $localStorage.thirdtasks;
				} else {
					$scope.thirdtasks = [ 'Task 7', 'Task 8', 'Task 9' ];
				}
				
				
                $scope.addTask = function() {
                    $scope.thirdtasks.push($scope.thirddata.thirdtask);
					$localStorage.thirdtasks = $scope.thirdtasks;
					
					$scope.thirddata.thirdtask = "";
                }
                $scope.removeTask = function(index) {
                    $scope.thirdtasks.splice(index, 1);
					$localStorage.thirdtasks = $scope.thirdtasks;
					
                }
                
        });