var express = require('express'),
  app = express(),
  port = process.env.PORT || 8000,
  fs = require('fs'),
  mongoose = require('mongoose'),
  Tips = require('/Users/t_nguyen/Workspace/read-data/models/model');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/bunpou');
var router = require('/Users/t_nguyen/Workspace/read-data/routers/router');
router(app);
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});
app.listen(port);
