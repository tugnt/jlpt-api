'use strict';
module.exports = function(app) {
  var tips = require('../controllers/controller');
  // todoList Routes
  app.route('/bunpou')
    .get(tips.show_tips);

  app.route('/create').get(tips.create_tips);

};
