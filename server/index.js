require('dotenv').config();
const express = require('express');
const massive = require('massive');
const app = express();
const { getInfo } = require('./controller');
const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive(CONNECTION_STRING).then(db => {
  app.set('db', db);
  console.log('DB CONNECTED');
});

app.use(express.json());
app.get('/api/info', getInfo);
app.listen(SERVER_PORT, () => console.log(`server is on!`));
