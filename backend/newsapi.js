const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routes/router.js');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ended:false}));

const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use('/', router)

const port = 4000;

require('dotenv').config();
const apiKey = process.env.API_KEY;

const axios = require("axios");

const server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
});




