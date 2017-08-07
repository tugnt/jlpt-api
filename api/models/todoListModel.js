'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  name: {
    type: String,
    Required: 'Kindly enter the name of the task'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

// exports cái TaskChema dưới tên là Task. Từ đây chúng ta có thể sử dụng được task
// ở bất kì đâu. Chỉ cần call require là đc.

module.exports = mongoose.model('Tasks', TaskSchema);
