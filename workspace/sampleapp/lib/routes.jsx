
Router.route('/', function() {
	this.layout('ApplicationLayout');
	this.render('index', {to: 'main'});
});

Router.route('/about', function() {
	this.layout('ApplicationLayout');
	this.render('about', {to: 'main'});
});

Router.route('/list', function() {
	this.layout('ListLayout');
	this.render('list', {to: 'main'});
	// this.render('listForm', {to: 'aside'});
});

Router.route('/interests', function() {
	this.layout('ApplicationLayout');
	this.render('interests', {to:'main'});
});

// Router.configure({ //used to make a default template for all routes
// 	layoutTemplate: 'ApplicationLayout'
// });

