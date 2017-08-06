'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TipSchema = new Schema({
  unit: String,
  content: String,
  title: String,
  type: {
    type: String,
    enum: ['Reading', 'Listening', 'Grammar', 'Vocabulary']
  },
  question: [{
    stt: {
      type: Number,
      default: 1
    },
    question: String,
    answerA: String,
    answerB: String,
    answerC: String,
    answerD: String,
    linkAudio: {
      type: String,
      default: ''
    },
    solution: String
  }]
});

var QuestionSchema = new Schema({
  unit: String,
  type: {
    type: String,
    enum: ['Reading', 'Listening', 'Grammar', 'Vocabulary']
  },
  level: Number,
  question: String,
  answerA: String,
  answerB: String,
  answerC: String,
  answerD: String,
  linkAudio: {
    type: String,
    default: ''
  },
  solution: String,
});
module.exports = mongoose.model('Question', QuestionSchema);
module.exports = mongoose.model('Tips', TipSchema);
