
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(require('less-middleware')({ src: __dirname + '/public' }));
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.post('/results', routes.results);
app.post('/donate_results', routes.donate_results);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

// here is our db
fake_books =
[{
  "title":"Elementary Statistics with CD 11th",
  "edition":"11th",
  "year":"2008",
  "format":"Book and CD-Rom",
  "author":"Mario F. Triola",
  "cover":"0321500245.jpg",
  "isbn":"0321500245",
  "publisher":"Pearson Education",
},{
  "title":"Society : The Basics 11th",
  "edition":"11th",
  "year":"2010",
  "format":"Paperback",
  "author":"Macionis",
  "cover":"0205003788.jpg",
  "isbn":"0205003788",
  "publisher":"Prentice Hall PTR",
},{
  "title":"Essentials of Sociology : A Down-to-Earth Approach 9th",
  "edition":"9th",
  "year":"2010",
  "format":"Paperback",
  "author":"James M. Henslin",
  "cover":"020576312X.jpg",
  "isbn":"020576312X",
  "publisher":"Prentice Hall PTR",
},{
  "title":"Prebles' Artforms 10th",
  "edition":"10th",
  "year":"2010",
  "format":"Paperback",
  "author":"Duane Preble",
  "cover":"0205797539.jpg",
  "isbn":"0205797539",
  "publisher":"Prentice Hall PTR",
},{
  "title":"Development Through the Lifespan 5th",
  "edition":"5th",
  "year":"2009",
  "format":"Hardcover",
  "author":"Laura E. Berk",
  "cover":"0205687938.jpg",
  "isbn":"0205687938",
  "publisher":"Allyn & Bacon",
},{
  "title":"Abnormal Psychology 14th",
  "edition":"14th",
  "year":"2009",
  "format":"Hardcover",
  "author":"James N. Butcher",
  "cover":"0205594956.jpg",
  "isbn":"0205594956",
  "publisher":"Allyn & Bacon",
},{
  "title":"Management 11th",
  "edition":"11th",
  "year":"2010",
  "format":"Hardcover",
  "author":"Robbins",
  "cover":"0132163845.jpg",
  "isbn":"0132163845",
  "publisher":"Prentice Hall PTR",
},{
  "title":"Exceptional Learners : An Introduction to Special Education 12th",
  "edition":"12th",
  "year":"2010",
  "format":"Hardcover",
  "author":"Daniel P. Hallahan",
  "cover":"0137033702.jpg",
  "isbn":"0137033702",
  "publisher":"Prentice Hall PTR",
},{
  "title":"Art History, Volume 1 4th",
  "edition":"4th",
  "year":"2010",
  "format":"Paperback",
  "author":"Marilyn Stokstad",
  "cover":"0205744206.jpg",
  "isbn":"0205744206",
  "publisher":"Prentice Hall PTR",
},{
  "title":"Chemistry : The Central Science 11th",
  "edition":"11th",
  "year":"2007",
  "format":"Book and CD-Rom",
  "author":"Bruce E. Bursten",
  "cover":"0136006175.jpg",
  "isbn":"0136006175",
  "publisher":"Pearson Education",
}]

schools = 
[{
  "name":"Chinese Immersion School at De Avilla Elementary School",
  "address":"1250 Waller Street, San Francisco, CA 94117",
  "telephone":"415-241-6325",
  "has": {
    "0321500245": 20,
    "0205003788": 42,
    "020576312X": 2,
    "0205797539": 1,
    "0205687938": 20,
    "0205594956": 300,
    "0132163845": 15,
    "0137033702": 21,
    "0205744206": 10,
    "0136006175": 8,
  },
  "needs": {
  },
},{
  "name":"Clarendon Alternative Elementary School",
  "address":"500 Clarendon Avenue, San Francisco, CA 94131",
  "telephone":"415-759-2796",
  "has": {
  },
  "needs": {
    "0321500245": 12,
    "0205003788": 1,
    "020576312X": 5,
    "0205797539": 15,
    "0205687938": 22,
    "0205594956": 150,
    "0132163845": 22,
    "0137033702": 31,
    "0205744206": 14,
    "0136006175": 18,
  },
},{
  "name":"Grattan Elementary School",
  "address":"165 Grattan Street, San Francisco, CA 94117",
  "telephone":"415-759.2815",
  "has": {
    "020576312X": 14,
    "0205687938": 10,
    "0132163845": 2,
    "0205744206": 1,
  },
  "needs": {
    "0321500245": 10,
    "0205003788": 2,
    "0205797539": 67,
    "0205594956": 44,
    "0137033702": 12,
    "0136006175": 52,
  },
},{
  "name":"John Yehall Chin Elementary School",
  "address":"350 Broadway, San Francisco, CA 94133",
  "telephone":"415-291-7946",
  "has": {
    "0321500245": 21,
    "020576312X": 2,
    "0205797539": 3,
    "0205594956": 13,
    "0132163845": 2,
    "0137033702": 33,
    "0136006175": 11,
  },
  "needs": {
    "0205003788": 30,
    "0205687938": 4,
    "0205744206": 22,
  },
}]
