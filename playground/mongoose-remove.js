var {ObjectID} = require('mongodb');

var {mongoose} = require('./../server/db/mongoose');
var {Todo} = require('./../server/models/todo');
var {User} = require('./../server/models/user');

Todo.remove({}).then((result) => {
  console.log(result);
});

Todo.findOneAndRemove({_id: 'abc'}).then(() => {

});

Todo.findByIdAndRemove('abc').then((todo) => {

});