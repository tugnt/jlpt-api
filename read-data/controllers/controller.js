'use strict';
var mongoose = require('mongoose');
var Tips = mongoose.model('Tips');

// Create data herequit
exports.create_tips = function (req, res){
   var unit1 = new Tips({unit: '1', content: 'Content unit 1',
   title: 'Unit 1 title', type: 'Reading',
   question: [{
       stt: 1,
       question: 'This is question test',
       answerA: 'a',
       answerB: 'B',
       answerC: 'C',
       answerD:  'D',
       solution: 1
   },
   {
       stt: 1,
       question: 'This is question test',
       answerA: 'a',
       answerB: 'B',
       answerC: 'C',
       answerD:  'D',
       solution: 1
   }]});
   console.log(unit1);
   unit1.save(function (error, bunpou){
     if (error) {
       console.log('Error');
     }
     res.json(bunpou)
   });
};


exports.show_tips = function (req, res){
  Tips.find({}, function(error, tips){
    if (error) {
      console.log('Error show list tips');
    }
    res.json(tips);
  });
}



function parserTipFromJson(){
  // this function parse data from Json file 
}
