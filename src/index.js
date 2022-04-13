const express = require('express');
const bodyParser = require('body-parser');
const route = require('./api/routes');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/test', (req, res) => {
  res.json(req.body);
});

app.use('/', route);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
