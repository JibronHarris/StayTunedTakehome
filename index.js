const express = require('express');
require('@prisma/client');

const app = express();
require('dotenv').config;

const route = require('./routes');
app.use('/', route);

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
