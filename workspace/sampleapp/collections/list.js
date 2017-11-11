import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Lists = new Meteor.Collection('lists');

ListSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name"
	},

	comment: {
		type: String,
		label: "Comment"
	},

	id: {
		type: Number,
		label: "List ID"
	},

	createdAt: {
		type: Date,
		label: "Created At",
		autoValue: function(){
			return new Date()
		}
	}
});

Lists.attachSchema(ListSchema);
