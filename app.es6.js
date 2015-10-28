/* eslint-env:node */
let express = require('express'),
  bodyParser = require('body-parser');
let app = express(),
  port = 3000;

// setup
app.engine('jade', require('jade').__express);
app.set('view engine', 'jade');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// sample
app.get('/', (req, res, next) => {
  res.end('hi nodejs');
});

// run
app.listen(port, () => {
  console.log(`Listening on port  :${port}`);
});
