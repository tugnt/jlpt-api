var express = require('express'),
  fs = require('fs'),
  mongoose = require('mongoose'),
  Tips = require('./models/model');
var app = express();
app.set('port', (process.env.PORT || 3000));
app.use(express.static(__dirname + '/'));

mongoose.Promise = global.Promise;
MONGOLAB_URI = 'mongodb://thaodan:thaodan@ds135983.mlab.com:35983/jlpt-app';
mongoose.connect(MONGOLAB_URI, function (error) {
    if (error) console.error('error');
    else console.log('mongo connected');
});
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

var router = require('./routers/router');
router(app);
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found1'})
});
app.listen(app.get('port'), function(){
  console.log('Node app is running on port', app.get('port'));
});
