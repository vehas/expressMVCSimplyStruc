let express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    port  = 3000;
// setup
app.engine('jade', require('jade'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//run
app.listen(port, function() {
  console.log('Listening on port ' + port)
})
