// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    console.log('Unable to connect to MongoDB Server', err);
  } else {
    console.log('Connected to MongoDB Server');
  }
  const db = client.db('TodoApp');

  db.collection('Todos').insertOne({
    text: 'Something to do',
    completed: false
  }, (err, result) => {
    if (err) {
      console.log('Unable to insert todo', err);
    } else {
      console.log(JSON.stringify(result.ops, undefined, 2));
    }
  });

  db.collection('Users').insertOne({
    name: 'Takuya',
    age: 18,
    location: 'Long Beach'
  }, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(JSON.stringify(result.ops, undefined, 2));
    }
  });

  client.close();
});

