var {ObjectID} = require('mongodb');

var {mongoose} = require('./../server/db/mongoose');
var {User} = require('./../server/models/user');

// var id = '5a976f883974be86479452ba';

// User.findById('5a976f883974be86479452ba').then((user) => {
// User.find().then((user) => {
User.findOne().then((user) => {
  if (!user) {
    console.log('User not found');
  } else {
    console.log(JSON.stringify(user, undefined, 2));
  }
}, (e) => {
  console.log(e);
});