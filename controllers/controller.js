'use strict';
var mongoose = require('mongoose');
var Tips = mongoose.model('Tips');
var fs = require('fs');

// Create data herequit
exports.create_tips = function (req, res){
    parserTipFromJson(req, res);
  //  var unit1 = new Tips({unit: '1', content: 'Content unit 1',
  //  title: 'Unit 1 title', type: 'Reading',
  //  question: [{
  //      stt: 1,
  //      question: 'This is question test',
  //      answerA: 'a',
  //      answerB: 'B',
  //      answerC: 'C',
  //      answerD:  'D',
  //      solution: 1
  //  },
  //  {
  //      stt: 1,
  //      question: 'This is question test',
  //      answerA: 'a',
  //      answerB: 'B',
  //      answerC: 'C',
  //      answerD:  'D',
  //      solution: 1
  //  }]});

   //console.log(unit1);

};

exports.show_tips = function (req, res){
  //parserTipFromJson();
  Tips.find({}, function(error, tips){
    if (error) {
      console.log('Error show list tips');
    }
    res.json(tips);
  });
};

exports.show_question_tips = function (req, res){
  Tips.findById(req.params.id, function(err, questions){
    if (err) {
      res.send(err);
    }
    res.json(questions);
  });
};

function parserTipFromJson(req, res){
  var json = fs.readFileSync('/Users/TungNguyen/Workspace/api/jlpt-api/read-data/controllers/jlpt.json','utf8');
  var jsonObject = JSON.parse(json);
  var unit, content, title;
  var question = [];
  var arrayObject = jsonObject.bunpou;
  arrayObject.forEach(function(item){
    unit = item.Bai;
    content = item.Content;
    title = item.Title;
    var questionObject = jsonObject.bunpou_renshuu;
    questionObject.forEach(function(question_item){
      if (unit == question_item.Deso) {
        question.push({
          question: question_item.CauHoi,
          answerA: question_item.A,
          answerB: question_item.B,
          answerC: question_item.C,
          answerD:  question_item.D,
          solution: 1,
        });
      }
    });
    // create tips here
    var tips = new Tips({
      unit: unit,
      content: content,
      title: title,
      type: 'Reading',
      question: question
    });
    tips.save(function (error, bunpou){
      // if (error) {
      //   console.log('Error');
      // }
      // res.json(bunpou)
    });
  });
}
