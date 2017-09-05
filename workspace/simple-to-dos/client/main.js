// import { Template } from 'meteor/templating';
// import { ReactiveVar } from 'meteor/reactive-var';

// import './main.html';

// Template.hello.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });

// Template.hello.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });

// Template.hello.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });

import angular from 'angular';
import angularMeteor from 'angular-meteor';
import todosList from '../imports/todosList';
import '../imports/startup/accounts-config.js';

angular.module('simple-todos', [
	angularMeteor,
	todosList.name,
	'accounts.ui'
]);

function onReady() {
	angular.bootstrap(document, ['simple-todos'])
}

if (Meteor.isCordova) {
	angular.element(document).on('deviceready', onReady);
} else {
	angular.element(document).ready(onReady);
}


