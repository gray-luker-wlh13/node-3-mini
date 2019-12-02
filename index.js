require('dotenv').config();
const express = require("express");
const massive = require('massive');
const controller = require('./controller');

const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env;

app.use(express.json());

massive(CONNECTION_STRING).then(db => {
  app.set('db', db)
  console.log('db connected')

  // db.new_planes().then(planes => console.log(planes)).catch(err => console.log(err))
  // db.get_planes().then(planes => console.log(planes)).catch(err => console.log(err))
})

//endpoints
app.get('/api/planes/:count', controller.getPlanes);

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}`);
});
