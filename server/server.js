const express = require('express');
const app = express();

const cors = require("cors");

app.use(cors())

app.use(express.json());
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db('planets_db');
    const planetsCollection = db.collection('planets');
    const planetsRouter = createRouter(planetsCollection);

    app.use('/api/planets', planetsRouter);
  })
  .catch(console.error);

app.listen(9000, function() {
  console.log(`Listening on port ${ this.address().port }`);
});