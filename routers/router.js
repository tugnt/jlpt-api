'use strict';
module.exports = function(app) {
  var tips = require('../controllers/controller');
  // todoList Routes
  // Show list tips of reading
  app.route('/reading')
    .get(tips.show_tips);

  app.route('/reading/:id')
    .get(tips.show_question_tips);

  app.route('/create').get(tips.create_tips);

};
