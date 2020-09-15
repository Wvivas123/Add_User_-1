//Packages
const express = require('express');
const mongoose = require('mongoose');
const dontenv = require('dotenv/config');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/user');
//Start Server on port 3000
const app = express();
app.listen(8000);
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
