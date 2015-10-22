var express = require('express');
var handlebars = require('express3-handlebars');
var app = express();
app.set('port', process.env.PORT || 3000);

//set up handlebars view engine
var view = handlebars.create({ defaultLayout:'main' });
app.engine('handlebars', view.engine);
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

var team = require('./lib/team.js');
var fs = require('fs');


<<<<<<< HEAD
app.get('/', function(req, res){
	
	res.type('text/plain');
	res.send('CS326 Turkey');
=======
app.get('/', function(req, res) {
	res.render('home');
>>>>>>> 52bd3fe45b8ce7be23f3e4dc1417ad85190964fd
});

app.get('/login', function(req, res) {
	res.render('login');
});

app.get('/profile', function(req, res) {
	res.render('profile');
});

app.get('/admin', function(req, res) {
	res.render('settings');
});

app.get('/forum', function(req, res) {
	res.render('forum');
});


app.get('/about', function(req, res){
	res.render('about');
});

app.get('/team*', function(req, res){
<<<<<<< HEAD
=======
//	if (req.path==='/team' && req.path.length===5){// buggggggggggggggggggggg
//	var result = team.all();
//	}
//	else
>>>>>>> 52bd3fe45b8ce7be23f3e4dc1417ad85190964fd
	if(Object.keys(req.query).length === 0){
		if(req.path==='/team'||req.path==='/team/'){
			var result = team.all();
		}
		else{
			res.status(404);
			res.render('404');
		}
	}
	else{
		var result = team.one(req.query.user);
	}
	if(result.count!==0){
		res.render('team', {
			members: result.data,
		});
	}
	else{
		res.status(404);
		res.render('404');
	}
});

//custom 404 page
app.use(function(req, res){
	res.status(404);
	res.render('404');
});

//custom 500 page
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'), function(){
	console.log( 'Express started on http://localhost:' +
			app.get('port') + '; press Ctrl-C to terminate.' );
});
