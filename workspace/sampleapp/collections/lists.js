import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Lists = new Meteor.Collection('lists');

Lists.allow({
	insert: function(userId, doc) {
		return !!userId;
	}
});

ListSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name",
		autoValue: function() {
			return this.userId
		}
	},

	comment: {
		type: String,
		label: "Comment"
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

Lists.attachSchema(ListSchema);
