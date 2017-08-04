var express = require('express'),
  app = express(),
  port = process.env.PORT || 8000,
  fs = require('fs'),
  mongoose = require('mongoose'),
  Tips = require('./models/model');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/bunpou');
var router = require('./routers/router');
router(app);
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});
app.listen(port);
