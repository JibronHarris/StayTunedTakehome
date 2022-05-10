const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const route = require('./server/api/routes');
const app = express();
const path = require('path');
const port = process.env.PORT || 8000;

app.use(cors());

app.use(express.static(path.resolve(__dirname, './client/build')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.use('/', route);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
