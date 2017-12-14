import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Employees = new Mongo.Collection('employees');

// Attribute = new SimpleSchema({ //not submitting on the other page, must find a workaround
// 	attributes: { type: Array },
// 	'attributes.$': { type: Object },﻿
// 	'attributes.$.skill': { type: String },
// 	'attributes.$.rating': { type: String },
// });

Employees.allow({
	insert: function(userId, doc) {
		return !!userId;
	}
});

EmployeeSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name"
	},

	// attributes: { type: Attribute },

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


