'use strict';
var fs = require('fs');
var mongoose = require('mongoose');
var Tips = mongoose.model('Tips');
var Question = mongoose.model('Question');

exports.grammarParse = function() {
  var json = fs.readFileSync('./controllers/jlpt.json', 'utf8');
  var jsonObject = JSON.parse(json);
  var grammarQuestion = [];
  var unit, content, title;
  var arrayObject = jsonObject.bunpou;
  arrayObject.forEach(function(item) {
    grammarQuestion = [];
    unit = item.Bai;
    content = item.Content;
    title = item.Title;
    var questionObject = jsonObject.bunpou_renshuu;
    questionObject.forEach(function(question_item) {
      if (unit == question_item.Deso) {
        grammarQuestion.push({
          question: question_item.CauHoi,
          answerA: question_item.A,
          answerB: question_item.B,
          answerC: question_item.C,
          answerD: question_item.D,
          solution: question_item.Dapan,
        });
      }
    });
    var tips = new Tips({
      unit: unit,
      content: content,
      title: title,
      type: 'Grammar',
      question: grammarQuestion
    });
    tips.save(function(error, data) {});
  });
}

exports.readingParse = function(req, res) {
  var json = fs.readFileSync('./controllers/jlpt.json', 'utf8');
  var jsonObject = JSON.parse(json);
  var grammarQuestion = [];
  var unit, content, title;
  var arrayObject = jsonObject.dokkai;
  arrayObject.forEach(function(item) {
    grammarQuestion = [];
    unit = item.Bai;
    content = item.Content;
    title = item.Title;
    var questionObject = jsonObject.dokkai_renshuu;
    questionObject.forEach(function(question_item) {
      if (unit == question_item.Deso) {
        grammarQuestion.push({
          question: question_item.CauHoi,
          answerA: question_item.A,
          answerB: question_item.B,
          answerC: question_item.C,
          answerD: question_item.D,
          solution: question_item.Dapan,
        });
      }
    });
    var tips = new Tips({
      unit: unit,
      content: content,
      title: title,
      type: 'Reading',
      question: grammarQuestion
    });
    tips.save(function(error, data) {});
  });
}

exports.listeningParse = function(req, res) {
  var json = fs.readFileSync('./controllers/jlpt.json', 'utf8');
  var jsonObject = JSON.parse(json);
  var grammarQuestion = [];
  var unit, content, title;
  var arrayObject = jsonObject.choukai;
  arrayObject.forEach(function(item) {
    grammarQuestion = [];
    unit = item.Bai;
    content = item.Content;
    title = item.Title;
    var tips = new Tips({
      unit: unit,
      content: content,
      title: title,
      type: 'Listening',
      question: grammarQuestion
    });
    tips.save(function(error, data) {});
  });
}

exports.vocabularyParse = function(req, res) {
  var json = fs.readFileSync('./controllers/jlpt.json', 'utf8');
  var jsonObject = JSON.parse(json);
  var grammarQuestion = [];
  var unit, content, title;
  var arrayObject = jsonObject.mojigoi;
  arrayObject.forEach(function(item) {
    grammarQuestion = [];
    unit = item.Bai;
    content = item.Content;
    title = item.Title;
    var questionObject = jsonObject.mojigoi_renshuu;
    questionObject.forEach(function(question_item) {
      if (unit == question_item.Deso) {
        grammarQuestion.push({
          question: question_item.CauHoi,
          answerA: question_item.A,
          answerB: question_item.B,
          answerC: question_item.C,
          answerD: question_item.D,
          solution: question_item.Dapan,
        });
      }
    });
    var tips = new Tips({
      unit: unit,
      content: content,
      title: title,
      type: 'Vocabulary',
      question: grammarQuestion
    });
    tips.save(function(error, data) {});
  });
}

exports.jlpt_question = function(req, res) {

}

exports.grammarQuestionAddN1 = function(req, res) {
  var json = fs.readFileSync('./controllers/jlpt.json', 'utf8');
  var jsonObject = JSON.parse(json);
  console.log(typeof(jsonObject));
  var unit, type, level, question,
    answerA, answerB, answerC,
    answerD, solution, linkAudio;
  var questionGrammarObject = jsonObject.N1.ExamPreparation.bunpou;
  questionGrammarObject.forEach(function(itemQuestion) {
    unit = itemQuestion.Deso;
    type = 'Grammar';
    level = 1;
    question = itemQuestion.CauHoi;
    answerA = itemQuestion.A;
    answerB = itemQuestion.answerB;
    answerC = itemQuestion.answerC;
    answerD = itemQuestion.answerD;
    solution = itemQuestion.Dapan;
    linkAudio = '';
    var question = new Question({
      unit: unit,
      type: type,
      level: level,
      question: question,
      answerA: answerA,
      answerB: answerB,
      answerC: answerC,
      answerD: answerD,
      solution: solution,
      linkAudio: linkAudio
    });
    question.save(function(error, data) {
      if (error) {
        console.log(error);
      }
    })
  });
}
//
exports.readingQuestionAddN1 = function(req, res) {
  var json = fs.readFileSync('./controllers/jlpt.json', 'utf8');
  var jsonObject = JSON.parse(json);
  console.log(typeof(jsonObject));
  var unit, type, level, question,
    answerA, answerB, answerC,
    answerD, solution, linkAudio;
  var questionGrammarObject = jsonObject.N1.ExamPreparation.dokkai;
  questionGrammarObject.forEach(function(itemQuestion) {
    unit = itemQuestion.Deso;
    type = 'Reading';
    level = 1;
    question = itemQuestion.CauHoi;
    answerA = itemQuestion.A;
    answerB = itemQuestion.answerB;
    answerC = itemQuestion.answerC;
    answerD = itemQuestion.answerD;
    solution = itemQuestion.Dapan;
    linkAudio = '';
    var question = new Question({
      unit: unit,
      type: type,
      level: level,
      question: question,
      answerA: answerA,
      answerB: answerB,
      answerC: answerC,
      answerD: answerD,
      solution: solution,
      linkAudio: linkAudio
    });
    question.save(function(error, data) {
      if (error) {
        console.log(error);
      }
    })
  });
}

exports.listeningQuestionAddN1 = function(req, res) {
  var json = fs.readFileSync('./controllers/jlpt.json', 'utf8');
  var jsonObject = JSON.parse(json);
  console.log(typeof(jsonObject));
  var unit, type, level, question,
    answerA, answerB, answerC,
    answerD, solution, linkAudio;
  var questionGrammarObject = jsonObject.N1.ExamPreparation.choukai;
  questionGrammarObject.forEach(function(itemQuestion) {
    unit = itemQuestion.Deso;
    type = 'Listening';
    level = 1;
    question = itemQuestion.CauHoi;
    answerA = itemQuestion.A;
    answerB = itemQuestion.answerB;
    answerC = itemQuestion.answerC;
    answerD = itemQuestion.answerD;
    solution = itemQuestion.Dapan;
    linkAudio = '';
    var question = new Question({
      unit: unit,
      type: type,
      level: level,
      question: question,
      answerA: answerA,
      answerB: answerB,
      answerC: answerC,
      answerD: answerD,
      solution: solution,
      linkAudio: linkAudio
    });
    question.save(function(error, data) {
      if (error) {
        console.log(error);
      }
    })
  });
}

exports.vocabularyQuestionAddN1 = function(req, res) {
  var json = fs.readFileSync('./controllers/jlpt.json', 'utf8');
  var jsonObject = JSON.parse(json);
  console.log(typeof(jsonObject));
  var unit, type, level, question,
    answerA, answerB, answerC,
    answerD, solution, linkAudio;
  var questionGrammarObject = jsonObject.N1.ExamPreparation.mojigoi;
  questionGrammarObject.forEach(function(itemQuestion) {
    unit = itemQuestion.Deso;
    type = 'Vocabulary';
    level = 1;
    question = itemQuestion.CauHoi;
    answerA = itemQuestion.A;
    answerB = itemQuestion.answerB;
    answerC = itemQuestion.answerC;
    answerD = itemQuestion.answerD;
    solution = itemQuestion.Dapan;
    linkAudio = '';
    var question = new Question({
      unit: unit,
      type: type,
      level: level,
      question: question,
      answerA: answerA,
      answerB: answerB,
      answerC: answerC,
      answerD: answerD,
      solution: solution,
      linkAudio: linkAudio
    });
    question.save(function(error, data) {
      if (error) {
        console.log(error);
      }
    })
  });
}

// N2

exports.grammarQuestionAddN2 = function(req, res) {
  var json = fs.readFileSync('./controllers/jlpt.json', 'utf8');
  var jsonObject = JSON.parse(json);
  console.log(typeof(jsonObject));
  var unit, type, level, question,
    answerA, answerB, answerC,
    answerD, solution, linkAudio;
  var questionGrammarObject = jsonObject.N2.ExamPreparation.bunpou;
  questionGrammarObject.forEach(function(itemQuestion) {
    unit = itemQuestion.Deso;
    type = 'Grammar';
    level = 2;
    question = itemQuestion.CauHoi;
    answerA = itemQuestion.A;
    answerB = itemQuestion.answerB;
    answerC = itemQuestion.answerC;
    answerD = itemQuestion.answerD;
    solution = itemQuestion.Dapan;
    linkAudio = '';
    var question = new Question({
      unit: unit,
      type: type,
      level: level,
      question: question,
      answerA: answerA,
      answerB: answerB,
      answerC: answerC,
      answerD: answerD,
      solution: solution,
      linkAudio: linkAudio
    });
    question.save(function(error, data) {
      if (error) {
        console.log(error);
      }
    })
  });
}
//
exports.readingQuestionAddN2 = function(req, res) {
  var json = fs.readFileSync('./controllers/jlpt.json', 'utf8');
  var jsonObject = JSON.parse(json);
  console.log(typeof(jsonObject));
  var unit, type, level, question,
    answerA, answerB, answerC,
    answerD, solution, linkAudio;
  var questionGrammarObject = jsonObject.N2.ExamPreparation.dokkai;
  questionGrammarObject.forEach(function(itemQuestion) {
    unit = itemQuestion.Deso;
    type = 'Reading';
    level = 2;
    question = itemQuestion.CauHoi;
    answerA = itemQuestion.A;
    answerB = itemQuestion.answerB;
    answerC = itemQuestion.answerC;
    answerD = itemQuestion.answerD;
    solution = itemQuestion.Dapan;
    linkAudio = '';
    var question = new Question({
      unit: unit,
      type: type,
      level: level,
      question: question,
      answerA: answerA,
      answerB: answerB,
      answerC: answerC,
      answerD: answerD,
      solution: solution,
      linkAudio: linkAudio
    });
    question.save(function(error, data) {
      if (error) {
        console.log(error);
      }
    })
  });
}

exports.listeningQuestionAddN2 = function(req, res) {
  var json = fs.readFileSync('./controllers/jlpt.json', 'utf8');
  var jsonObject = JSON.parse(json);
  console.log(typeof(jsonObject));
  var unit, type, level, question,
    answerA, answerB, answerC,
    answerD, solution, linkAudio;
  var questionGrammarObject = jsonObject.N2.ExamPreparation.choukai;
  questionGrammarObject.forEach(function(itemQuestion) {
    unit = itemQuestion.Deso;
    type = 'Listening';
    level = 2;
    question = itemQuestion.CauHoi;
    answerA = itemQuestion.A;
    answerB = itemQuestion.answerB;
    answerC = itemQuestion.answerC;
    answerD = itemQuestion.answerD;
    solution = itemQuestion.Dapan;
    linkAudio = '';
    var question = new Question({
      unit: unit,
      type: type,
      level: level,
      question: question,
      answerA: answerA,
      answerB: answerB,
      answerC: answerC,
      answerD: answerD,
      solution: solution,
      linkAudio: linkAudio
    });
    question.save(function(error, data) {
      if (error) {
        console.log(error);
      }
    })
  });
}

exports.vocabularyQuestionAddN2 = function(req, res) {
  var json = fs.readFileSync('./controllers/jlpt.json', 'utf8');
  var jsonObject = JSON.parse(json);
  console.log(typeof(jsonObject));
  var unit, type, level, question,
    answerA, answerB, answerC,
    answerD, solution, linkAudio;
  var questionGrammarObject = jsonObject.N2.ExamPreparation.mojigoi;
  questionGrammarObject.forEach(function(itemQuestion) {
    unit = itemQuestion.Deso;
    type = 'Vocabulary';
    level = 2;
    question = itemQuestion.CauHoi;
    answerA = itemQuestion.A;
    answerB = itemQuestion.answerB;
    answerC = itemQuestion.answerC;
    answerD = itemQuestion.answerD;
    solution = itemQuestion.Dapan;
    linkAudio = '';
    var question = new Question({
      unit: unit,
      type: type,
      level: level,
      question: question,
      answerA: answerA,
      answerB: answerB,
      answerC: answerC,
      answerD: answerD,
      solution: solution,
      linkAudio: linkAudio
    });
    question.save(function(error, data) {
      if (error) {
        console.log(error);
      }
    })
  });
}

// N3


exports.grammarQuestionAddN3 = function(req, res) {
  var json = fs.readFileSync('./controllers/jlpt.json', 'utf8');
  var jsonObject = JSON.parse(json);
  console.log(typeof(jsonObject));
  var unit, type, level, question,
    answerA, answerB, answerC,
    answerD, solution, linkAudio;
  var questionGrammarObject = jsonObject.N3.ExamPreparation.bunpou;
  questionGrammarObject.forEach(function(itemQuestion) {
    unit = itemQuestion.Deso;
    type = 'Grammar';
    level = 3;
    question = itemQuestion.CauHoi;
    answerA = itemQuestion.A;
    answerB = itemQuestion.answerB;
    answerC = itemQuestion.answerC;
    answerD = itemQuestion.answerD;
    solution = itemQuestion.Dapan;
    linkAudio = '';
    var question = new Question({
      unit: unit,
      type: type,
      level: level,
      question: question,
      answerA: answerA,
      answerB: answerB,
      answerC: answerC,
      answerD: answerD,
      solution: solution,
      linkAudio: linkAudio
    });
    question.save(function(error, data) {
      if (error) {
        console.log(error);
      }
    })
  });
}
//
exports.readingQuestionAddN3 = function(req, res) {
  var json = fs.readFileSync('./controllers/jlpt.json', 'utf8');
  var jsonObject = JSON.parse(json);
  console.log(typeof(jsonObject));
  var unit, type, level, question,
    answerA, answerB, answerC,
    answerD, solution, linkAudio;
  var questionGrammarObject = jsonObject.N3.ExamPreparation.dokkai;
  questionGrammarObject.forEach(function(itemQuestion) {
    unit = itemQuestion.Deso;
    type = 'Reading';
    level = 3;
    question = itemQuestion.CauHoi;
    answerA = itemQuestion.A;
    answerB = itemQuestion.answerB;
    answerC = itemQuestion.answerC;
    answerD = itemQuestion.answerD;
    solution = itemQuestion.Dapan;
    linkAudio = '';
    var question = new Question({
      unit: unit,
      type: type,
      level: level,
      question: question,
      answerA: answerA,
      answerB: answerB,
      answerC: answerC,
      answerD: answerD,
      solution: solution,
      linkAudio: linkAudio
    });
    question.save(function(error, data) {
      if (error) {
        console.log(error);
      }
    })
  });
}

exports.listeningQuestionAddN3 = function(req, res) {
  var json = fs.readFileSync('./controllers/jlpt.json', 'utf8');
  var jsonObject = JSON.parse(json);
  console.log(typeof(jsonObject));
  var unit, type, level, question,
    answerA, answerB, answerC,
    answerD, solution, linkAudio;
  var questionGrammarObject = jsonObject.N3.ExamPreparation.choukai;
  questionGrammarObject.forEach(function(itemQuestion) {
    unit = itemQuestion.Deso;
    type = 'Listening';
    level = 3;
    question = itemQuestion.CauHoi;
    answerA = itemQuestion.A;
    answerB = itemQuestion.answerB;
    answerC = itemQuestion.answerC;
    answerD = itemQuestion.answerD;
    solution = itemQuestion.Dapan;
    linkAudio = '';
    var question = new Question({
      unit: unit,
      type: type,
      level: level,
      question: question,
      answerA: answerA,
      answerB: answerB,
      answerC: answerC,
      answerD: answerD,
      solution: solution,
      linkAudio: linkAudio
    });
    question.save(function(error, data) {
      if (error) {
        console.log(error);
      }
    })
  });
}

exports.vocabularyQuestionAddN3 = function(req, res) {
  var json = fs.readFileSync('./controllers/jlpt.json', 'utf8');
  var jsonObject = JSON.parse(json);
  console.log(typeof(jsonObject));
  var unit, type, level, question,
    answerA, answerB, answerC,
    answerD, solution, linkAudio;
  var questionGrammarObject = jsonObject.N3.ExamPreparation.mojigoi;
  questionGrammarObject.forEach(function(itemQuestion) {
    unit = itemQuestion.Deso;
    type = 'Vocabulary';
    level = 3;
    question = itemQuestion.CauHoi;
    answerA = itemQuestion.A;
    answerB = itemQuestion.answerB;
    answerC = itemQuestion.answerC;
    answerD = itemQuestion.answerD;
    solution = itemQuestion.Dapan;
    linkAudio = '';
    var question = new Question({
      unit: unit,
      type: type,
      level: level,
      question: question,
      answerA: answerA,
      answerB: answerB,
      answerC: answerC,
      answerD: answerD,
      solution: solution,
      linkAudio: linkAudio
    });
    question.save(function(error, data) {
      if (error) {
        console.log(error);
      }
    })
  });
}

// N4

exports.grammarQuestionAddN4 = function(req, res) {
  var json = fs.readFileSync('./controllers/jlpt.json', 'utf8');
  var jsonObject = JSON.parse(json);
  console.log(typeof(jsonObject));
  var unit, type, level, question,
    answerA, answerB, answerC,
    answerD, solution, linkAudio;
  var questionGrammarObject = jsonObject.N4.ExamPreparation.bunpou;
  questionGrammarObject.forEach(function(itemQuestion) {
    unit = itemQuestion.Deso;
    type = 'Grammar';
    level = 4;
    question = itemQuestion.CauHoi;
    answerA = itemQuestion.A;
    answerB = itemQuestion.answerB;
    answerC = itemQuestion.answerC;
    answerD = itemQuestion.answerD;
    solution = itemQuestion.Dapan;
    linkAudio = '';
    var question = new Question({
      unit: unit,
      type: type,
      level: level,
      question: question,
      answerA: answerA,
      answerB: answerB,
      answerC: answerC,
      answerD: answerD,
      solution: solution,
      linkAudio: linkAudio
    });
    question.save(function(error, data) {
      if (error) {
        console.log(error);
      }
    })
  });
}
//
exports.readingQuestionAddN4 = function(req, res) {
  var json = fs.readFileSync('./controllers/jlpt.json', 'utf8');
  var jsonObject = JSON.parse(json);
  console.log(typeof(jsonObject));
  var unit, type, level, question,
    answerA, answerB, answerC,
    answerD, solution, linkAudio;
  var questionGrammarObject = jsonObject.N4.ExamPreparation.dokkai;
  questionGrammarObject.forEach(function(itemQuestion) {
    unit = itemQuestion.Deso;
    type = 'Reading';
    level = 4;
    question = itemQuestion.CauHoi;
    answerA = itemQuestion.A;
    answerB = itemQuestion.answerB;
    answerC = itemQuestion.answerC;
    answerD = itemQuestion.answerD;
    solution = itemQuestion.Dapan;
    linkAudio = '';
    var question = new Question({
      unit: unit,
      type: type,
      level: level,
      question: question,
      answerA: answerA,
      answerB: answerB,
      answerC: answerC,
      answerD: answerD,
      solution: solution,
      linkAudio: linkAudio
    });
    question.save(function(error, data) {
      if (error) {
        console.log(error);
      }
    })
  });
}

exports.listeningQuestionAddN4 = function(req, res) {
  var json = fs.readFileSync('./controllers/jlpt.json', 'utf8');
  var jsonObject = JSON.parse(json);
  console.log(typeof(jsonObject));
  var unit, type, level, question,
    answerA, answerB, answerC,
    answerD, solution, linkAudio;
  var questionGrammarObject = jsonObject.N4.ExamPreparation.choukai;
  questionGrammarObject.forEach(function(itemQuestion) {
    unit = itemQuestion.Deso;
    type = 'Listening';
    level = 4;
    question = itemQuestion.CauHoi;
    answerA = itemQuestion.A;
    answerB = itemQuestion.answerB;
    answerC = itemQuestion.answerC;
    answerD = itemQuestion.answerD;
    solution = itemQuestion.Dapan;
    linkAudio = '';
    var question = new Question({
      unit: unit,
      type: type,
      level: level,
      question: question,
      answerA: answerA,
      answerB: answerB,
      answerC: answerC,
      answerD: answerD,
      solution: solution,
      linkAudio: linkAudio
    });
    question.save(function(error, data) {
      if (error) {
        console.log(error);
      }
    })
  });
}

exports.vocabularyQuestionAddN4 = function(req, res) {
  var json = fs.readFileSync('./controllers/jlpt.json', 'utf8');
  var jsonObject = JSON.parse(json);
  console.log(typeof(jsonObject));
  var unit, type, level, question,
    answerA, answerB, answerC,
    answerD, solution, linkAudio;
  var questionGrammarObject = jsonObject.N4.ExamPreparation.mojigoi;
  questionGrammarObject.forEach(function(itemQuestion) {
    unit = itemQuestion.Deso;
    type = 'Vocabulary';
    level = 4;
    question = itemQuestion.CauHoi;
    answerA = itemQuestion.A;
    answerB = itemQuestion.answerB;
    answerC = itemQuestion.answerC;
    answerD = itemQuestion.answerD;
    solution = itemQuestion.Dapan;
    linkAudio = '';
    var question = new Question({
      unit: unit,
      type: type,
      level: level,
      question: question,
      answerA: answerA,
      answerB: answerB,
      answerC: answerC,
      answerD: answerD,
      solution: solution,
      linkAudio: linkAudio
    });
    question.save(function(error, data) {
      if (error) {
        console.log(error);
      }
    })
  });
}

// N5

exports.grammarQuestionAddN5 = function(req, res) {
  var json = fs.readFileSync('./controllers/jlpt.json', 'utf8');
  var jsonObject = JSON.parse(json);
  console.log(typeof(jsonObject));
  var unit, type, level, question,
    answerA, answerB, answerC,
    answerD, solution, linkAudio;
  var questionGrammarObject = jsonObject.N5.ExamPreparation.bunpou;
  questionGrammarObject.forEach(function(itemQuestion) {
    unit = itemQuestion.Deso;
    type = 'Grammar';
    level = 5;
    question = itemQuestion.CauHoi;
    answerA = itemQuestion.A;
    answerB = itemQuestion.answerB;
    answerC = itemQuestion.answerC;
    answerD = itemQuestion.answerD;
    solution = itemQuestion.Dapan;
    linkAudio = '';
    var question = new Question({
      unit: unit,
      type: type,
      level: level,
      question: question,
      answerA: answerA,
      answerB: answerB,
      answerC: answerC,
      answerD: answerD,
      solution: solution,
      linkAudio: linkAudio
    });
    question.save(function(error, data) {
      if (error) {
        console.log(error);
      }
    })
  });
}
//
exports.readingQuestionAddN5 = function(req, res) {
  var json = fs.readFileSync('./controllers/jlpt.json', 'utf8');
  var jsonObject = JSON.parse(json);
  console.log(typeof(jsonObject));
  var unit, type, level, question,
    answerA, answerB, answerC,
    answerD, solution, linkAudio;
  var questionGrammarObject = jsonObject.N5.ExamPreparation.dokkai;
  questionGrammarObject.forEach(function(itemQuestion) {
    unit = itemQuestion.Deso;
    type = 'Reading';
    level = 5;
    question = itemQuestion.CauHoi;
    answerA = itemQuestion.A;
    answerB = itemQuestion.answerB;
    answerC = itemQuestion.answerC;
    answerD = itemQuestion.answerD;
    solution = itemQuestion.Dapan;
    linkAudio = '';
    var question = new Question({
      unit: unit,
      type: type,
      level: level,
      question: question,
      answerA: answerA,
      answerB: answerB,
      answerC: answerC,
      answerD: answerD,
      solution: solution,
      linkAudio: linkAudio
    });
    question.save(function(error, data) {
      if (error) {
        console.log(error);
      }
    })
  });
}

exports.listeningQuestionAddN5 = function(req, res) {
  var json = fs.readFileSync('./controllers/jlpt.json', 'utf8');
  var jsonObject = JSON.parse(json);
  console.log(typeof(jsonObject));
  var unit, type, level, question,
    answerA, answerB, answerC,
    answerD, solution, linkAudio;
  var questionGrammarObject = jsonObject.N5.ExamPreparation.choukai;
  questionGrammarObject.forEach(function(itemQuestion) {
    unit = itemQuestion.Deso;
    type = 'Listening';
    level = 5;
    question = itemQuestion.CauHoi;
    answerA = itemQuestion.A;
    answerB = itemQuestion.answerB;
    answerC = itemQuestion.answerC;
    answerD = itemQuestion.answerD;
    solution = itemQuestion.Dapan;
    linkAudio = '';
    var question = new Question({
      unit: unit,
      type: type,
      level: level,
      question: question,
      answerA: answerA,
      answerB: answerB,
      answerC: answerC,
      answerD: answerD,
      solution: solution,
      linkAudio: linkAudio
    });
    question.save(function(error, data) {
      if (error) {
        console.log(error);
      }
    })
  });
}

exports.vocabularyQuestionAddN5 = function(req, res) {
  var json = fs.readFileSync('./controllers/jlpt.json', 'utf8');
  var jsonObject = JSON.parse(json);
  console.log(typeof(jsonObject));
  var unit, type, level, question,
    answerA, answerB, answerC,
    answerD, solution, linkAudio;
  var questionGrammarObject = jsonObject.N5.ExamPreparation.mojigoi;
  questionGrammarObject.forEach(function(itemQuestion) {
    unit = itemQuestion.Deso;
    type = 'Vocabulary';
    level = 5;
    question = itemQuestion.CauHoi;
    answerA = itemQuestion.A;
    answerB = itemQuestion.answerB;
    answerC = itemQuestion.answerC;
    answerD = itemQuestion.answerD;
    solution = itemQuestion.Dapan;
    linkAudio = '';
    var question = new Question({
      unit: unit,
      type: type,
      level: level,
      question: question,
      answerA: answerA,
      answerB: answerB,
      answerC: answerC,
      answerD: answerD,
      solution: solution,
      linkAudio: linkAudio
    });
    question.save(function(error, data) {
      if (error) {
        console.log(error);
      }
    })
  });
}
