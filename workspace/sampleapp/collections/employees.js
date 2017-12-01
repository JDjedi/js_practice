import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Employees = new Mongo.Collection('employees');

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


