console.log("Cleaning database...")

const BoardModel = require('./models').Board;
const ThreadModel = require('./models').Thread;
const ReplyModel = require('./models').Reply;

BoardModel.deleteMany({}).then(function(){
      console.log("Board data deleted"); // Success
  }).catch(function(error){
      console.log(error); // Failure
  });;
ThreadModel.deleteMany({}).then(function(){
      console.log("Thread data deleted"); // Success
  }).catch(function(error){
      console.log(error); // Failure
  });;
ReplyModel.deleteMany({}).then(function(){
      console.log("Reply data deleted"); // Success
  }).catch(function(error){
      console.log(error); // Failure
  });;
