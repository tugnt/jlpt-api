'use strict';
module.exports = function(app) {
  var tips = require('../controllers/controller');

  app.route('/').get(tips.home);

  app.route('/api/tips/:type')
    .get(tips.show_tips);
  app.route('/reading/:id')
    .get(tips.show_question_of_tips);

  app.route('/api/questions/:level/:type')
    .get(tips.show_list_unit);
  app.route('/api/questions/:level/:type/:unit')
    .get(tips.show_question_type_of_level);

  // app.route('/create').get(tips.create_tips);
  // app.route('/add').get(tips.add_question);
};
