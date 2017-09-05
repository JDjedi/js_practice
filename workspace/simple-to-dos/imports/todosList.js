import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Tasks } from '../imports/api/tasks.js';
import { Meteor } from 'meteor/meteor';
import template from './todosList.html';


class TodosListCtrl {
  constructor($scope) { //Creates task list
    $scope.viewModel(this);
 
    this.hideCompleted = false;
 
    this.helpers({
      tasks() {
        const selector = {};
 
        //If hide completed is checked, filter tasks
        if (this.getReactively('hideCompleted')) {
          selector.checked = {
            $ne: true
          };
        }
 
        // Show newest tasks at the top
        return Tasks.find(selector, {
          sort: {
            createdAt: -1
          }
        });
       }, 
      // show how many tasks remaining
      incompleteCount() {
        return Tasks.find({
          checked: {
            $ne: true
          }
        }).count();
      },
      currentUser() {
        return Meteor.user();
      }
    });
  }

	addTask(newTask) { //creates the means to add to task list
    Meteor.call('tasks.insert', newTask);

		this.newTask = '';
	}

	setChecked(task) {
    Meteor.call('tasks.setChecked', task._id, !task.checked);
  }

	removeTask(task) {
		Meteor.call('tasks.remove', task._id);
	}
}

export default angular.module('todosList', [
	angularMeteor
])
	.component('todosList', {
		templateUrl: 'imports/todosList.html',
		controller: ['$scope', TodosListCtrl]
	});


