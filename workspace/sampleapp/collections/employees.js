import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Employees = new Mongo.Collection('employees');

Employees.allow({
	insert: function(userId, doc) {
		return !!userId;
	}
});

 Attribute = new SimpleSchema({
 	attributes: { type: Array },
	'attributes.$': { type: Object },﻿
	'attributes.$.skill': { type: String },
	'attributes.$.rating': { type: String },
 });

EmployeeSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name"
	},

	attributes: { type: Attribute },

	mainLog: {
		type: Boolean,
		defaultValue: false,
		optional: true,
		autoform: {
			type: "hidden"
		}
	},

	author: {
		type: String,
		autoValue: function() {
			return this.userId
		},
		autoform: {
			type: "hidden"
		}
	},

	createdAt: {
		type: Date,
		label: "Created At",
		autoValue: function(){
			return new Date()
		},
		autoform: {
			type: "hidden"
		}
	}
});

Employees.attachSchema(EmployeeSchema);


