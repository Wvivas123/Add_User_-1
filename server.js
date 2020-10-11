//Packages
const express = require('express');
const mongoose = require('mongoose');
const dontenv = require('dotenv/config');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/user');
//Start Server on port 3000
let port = process.env.PORT;
const app = express();

if (port == null || port == '') {
  port = 8000;
}
app.listen(port);

console.log('Listening on 3000');

//Middleware
app.use(cors());
app.use(bodyParser.json());

app.use('/', userRoutes);
app.use(express.static('public'));
//DB Connect
mongoose.connect(
  process.env.DB_CONNECTION,
  { useUnifiedTopology: true },
  () => {
    console.log('Database Connected');
  }
);
