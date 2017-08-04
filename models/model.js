'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TipSchema = new Schema({
  unit: String,
  content: String,
  title: String,
  type: {
    type: String,
    enum : ['Reading', 'Listening', 'Grammar', 'Vocabulary']
  },
  question:[{
    stt: Number,
    question: String,
    answerA: String,
    answerB: String,
    answerC: String,
    answerD: String,
    linkAudio: {
      type: String,
      default: ''
    },
    solution: Number
  }]
});
module.exports = mongoose.model('Tips', TipSchema);
