
Router.route('/', function() {
	this.render('index', {to: 'main'});
	//this.render('UserLoggedInLayout', { to: 'footer'});
});

Router.route('/about', function() {
	this.render('about', {to: 'main'});
	//this.render('UserLoggedInLayout', { to: 'footer'});
});

Router.route('/list', function() {
	this.layout('ListLayout');
	this.render('list', {to: 'main'});
});

Router.configure({ //used to make a default template for all routes
	layoutTemplate: 'ApplicationLayout'
});

