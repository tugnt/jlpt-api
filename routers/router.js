'use strict';
module.exports = function(app) {
  var tips = require('../controllers/controller');

  app.route('/').get(tips.home);

  app.route('/api/tips/:type')
    .get(tips.show_tips);
  app.route('/reading/:id')
    .get(tips.show_question_tips);

  app.route('/api/questions/:type/:level').get();
  app.route('/api/questions/:type/:level/:unit').get();

  //app.route('/create').get(tips.create_tips);
  //app.route('/add').get(tips.add_question);
};
