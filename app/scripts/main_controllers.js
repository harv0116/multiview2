// JavaScript Document
        'use strict';
		angular.module('myApp') 
           .controller('MyController', function($scope, $window) {
                $scope.data = {};
				$scope.saved = $window.localStorage.getItem('tasks');
				$scope.tasks = ($window.localStorage.getItem('tasks'!==null)) ? JSON.parse($scope.saved) : [ 'Task 1', 'Task 2', 'Task 3' ];
				$window.localStorage.setItem('tasks',JSON.stringify($scope.tasks));
                $scope.addTask = function() {
                    $scope.tasks.push($scope.data.task);
					$window.localStorage.setItem('tasks',JSON.stringify($scope.tasks));
					$scope.data.task = "";
                }
                $scope.removeTask = function(index) {
                    $scope.tasks.splice(index, 1);
					$window.localStorage.setItem('tasks',JSON.stringify($scope.tasks));
                }
                
        });
		angular.module('myApp') 
           .controller('List2Ctrl', function($scope) {
                $scope.data2 = {};
                $scope.add2Task = function() {
                    $scope.tasks2.push($scope.data2.task2);
                    $scope.data2.task2 = "";
                }
                $scope.remove2Task = function(index) {
                    $scope.tasks2.splice(index, 1);
                }
                $scope.tasks2 = [ 'Task 4', 'Task 5', 'Task 6'];
        });
		angular.module('myApp') 
           .controller('List3Ctrl', function($scope) {
                $scope.data3 = {};
                $scope.add3Task = function() {
                    $scope.tasks3.push($scope.data3.task3);
                    $scope.data3.task3 = "";
                }
                $scope.remove3Task = function(index) {
                    $scope.tasks3.splice(index, 1);
                }
                $scope.tasks3 = [ 'Task 7', 'Task 8', 'Task 9'];
        });				
		