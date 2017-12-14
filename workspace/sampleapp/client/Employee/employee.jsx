import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import './employee.html';

Meteor.subscribe('employees');

// Template.employeeLog.helpers({
//   info: function() {
//   	return employees.find({});
//   },
// });

Template.employeeDataInput.events({
	'submit form': function(event){
		event.preventDefault();
		var employeeNameVar = event.target.name.value;
		var employeeSkillVar = event.target.skill.value;
		var employeeRatingVar = event.target.rating.value;

		console.log(employeeNameVar);
		console.log(employeeSkillVar);
		console.log(employeeRatingVar);

		Employees.insert({
			name: employeeNameVar,
			// skill: employeeSkillVar, //these are not inserting because of the  
			// rating: employeeRatingVar //attribute schema being wed inside the Emp schema
		});
	}
});