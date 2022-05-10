const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const route = require('./src/api/routes');
const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.use('/', route);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
