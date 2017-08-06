'use strict';
var mongoose = require('mongoose');
var Tips = mongoose.model('Tips');
var parse = require('./parseData.js');
var fs = require('fs');

exports.home = function(req, res) {
  res.render('../views/pages/index');
};

exports.create_tips = function(req, res) {
  parserTipFromJson(req, res);
};

exports.show_tips = function(req, res) {
  var type = firstToUpperCase(req.params.type);
  var query = Tips.find({
    'type': type
  });
  query.exec(function(error, data) {
    if (error) {
      console.log(error);
    }
    res.json(data);
  });
}

function firstToUpperCase(str) {
  return str.substr(0, 1).toUpperCase() + str.substr(1);
}

exports.show_question_tips = function(req, res) {
  Tips.findById(req.params.id, function(err, questions) {
    if (err) {
      res.send(err);
    }
    res.json(questions);
  });
};

// exports.add_question = function(req, res) {
//   parse.grammarQuestionAddN1();
//   parse.readingQuestionAddN1();
//   parse.listeningQuestionAddN1();
//   parse.vocabularyQuestionAddN1();
//
//
//   parse.grammarQuestionAddN2();
//   parse.readingQuestionAddN2();
//   parse.listeningQuestionAddN2();
//   parse.vocabularyQuestionAddN2();
//
//
//   parse.grammarQuestionAddN3();
//   parse.readingQuestionAddN3();
//   parse.listeningQuestionAddN3();
//   parse.vocabularyQuestionAddN3();
//
//
//   parse.grammarQuestionAddN4();
//   parse.readingQuestionAddN4();
//   parse.listeningQuestionAddN4();
//   parse.vocabularyQuestionAddN4();
//
//
//   parse.grammarQuestionAddN5();
//   parse.readingQuestionAddN5();
//   parse.listeningQuestionAddN5();
//   parse.vocabularyQuestionAddN5();
//   console.log('OK');
// }
