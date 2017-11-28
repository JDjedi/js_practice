Meteor.publish('lists', function() {
	return Lists.find({name: this.userId});
})