const mongoose = require('mongoose');
mongoose.connect(process.env.DB);
const { Schema } = mongoose;

const replySchema = new Schema ({
  text: {type: String, required: true},
  created_on: {type : Date, required: true, default: () => { return new Date() }},
  delete_password: {type: String, required: true},
  reported: {type: Boolean, required: true},
})
const Reply = mongoose.model('Reply', replySchema);

const threadSchema = new Schema ({
  text: {type: String, required: true},
  created_on: {type : Date, required: true, default: () => { return new Date() }},
  bumped_on: {type : Date, required: true, default: () => { return new Date() }},
  reported: {type: Boolean, required: true},
  delete_password: {type: String, required: true},
  replies: {type: [replySchema], required: true},
});
const Thread = mongoose.model('Thread', threadSchema);

const boardSchema = new Schema ({
  name: {type: String, required: true},
  threads: {type: [threadSchema], required: true},
});
const Board = mongoose.model('Board', boardSchema);



exports.Board = Board;
exports.Thread = Thread;
exports.Reply = Reply;
