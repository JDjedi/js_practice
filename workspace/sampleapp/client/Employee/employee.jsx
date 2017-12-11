import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import './employee.html';

Meteor.subscribe('employees');

Template.employeeLog.helpers({
  info: function() {
  	return employees.find({});
  },
});