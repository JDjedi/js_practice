
Router.route('/', function() {
	this.render('index');
	//this.render('UserLoggedInLayout', { to: 'footer'});
});

Router.route('/about', function() {
	this.render('about');
	//this.render('UserLoggedInLayout', { to: 'footer'});
});

Router.configure({ //used to make a default template for all routes
	layoutTemplate: 'ApplicationLayout'
});

