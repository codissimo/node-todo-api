// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    console.log('Unable to connect to MongoDB Server', err);
  } else {
    console.log('Connected to MongoDB Server');
  }
  const db = client.db('TodoApp');

  // // $set
  // db.collection('Users').findOneAndUpdate({
  //   _id: new ObjectID('5a95c2a95e178b50de1bac4d')
  // }, {
  //   $set: {age: 38}
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  // $inc
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5a95c2a95e178b50de1bac4d')
  }, {
    $inc: {age: -1}
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  client.close();
});