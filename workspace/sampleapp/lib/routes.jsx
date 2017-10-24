
Router.route('/', function() {
	this.layout('IndexLayout');
	this.render('index');
});

Router.route('/about', function() {
	this.layout('AboutLayout');
	this.render('about');
});

// Router.configure({ //used to make a default template for all routes
// 	layoutTemplate: 'ApplicationLayout'
// });

