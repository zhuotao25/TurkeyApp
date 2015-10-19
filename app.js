var express = require('express');
var app = express();
app.set('port', process.env.PORT || 3000);

//set up handlebars view engine
var handlebars = require('express3-handlebars').create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
	res.type('text/plain');
	res.send('CS326 Turkey');
});

app.get('/about', function(req, res){
	res.render('about');
});

app.get('/team', function(req, res){
	res.render('team');
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