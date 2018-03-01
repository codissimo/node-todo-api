// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    console.log('Unable to connect to MongoDB Server', err);
  } else {
    console.log('Connected to MongoDB Server');
  }
  const db = client.db('TodoApp');

  // delete many
  db.collection('Todos').deleteMany({completed: true}).then((result) => {
    console.log(result);
  });

  // deleteOne

  // findOneAndDelete

  client.close();
});

