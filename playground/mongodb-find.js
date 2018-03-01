// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    console.log('Unable to connect to MongoDB Server', err);
  } else {
    console.log('Connected to MongoDB Server');
  }
  const db = client.db('TodoApp');

  // db.collection('Users').find({
  //   _id: new ObjectID('5a95c2ab79f09850e096550a')
  // }).toArray().then((docs) => {
  //   console.log('Users');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log(err);
  // });

  db.collection('Users').find({age: 28}).count().then((docs) => {
    console.log(`User count: ${docs}`);
    // console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log(err);
  });

  client.close();
});

