import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Tasks } from '../imports/api/tasks.js';
import template from './todosList.html';


class TodosListCtrl {
  constructor($scope) { //Creates task list
    $scope.viewModel(this);
 
    this.helpers({
      tasks() {
        return Tasks.find({}, {
        	sort: {
        		createdAt: -1
        	}
        });
      }
    })
  }

	addTask(newTask) { //creates the means to add to task list
		Tasks.insert({
			text: newTask,
			createdAt: new Date
		});

		this.newTask = '';
	}

	setChecked(task) {
		Tasks.update(task._id, {
			$set: {
				checked: !task.checked
			},
		});
	}

	removeTask(task) {
		Tasks.remove(task._id);
	}
}

export default angular.module('todosList', [
	angularMeteor
])
	.component('todosList', {
		templateUrl: 'imports/todosList.html',
		controller: ['$scope', TodosListCtrl]
	});


