const express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  mongoose = require('mongoose'),
  config = require('./shared/dbCfg'),  
  customerRoutes = require('./shared/customerRoutes'); // Routes to handle API requests

mongoose.Promise = global.Promise;

// Establish database connection
var dbUri = process.env.MONGODB_URI || config.DB;
var db = mongoose.connect(dbUri).then(
  () => {
    console.log('Database is connected')
  },
  err => {
    console.log('Can not connect to the database' + err)
  }
);

const app = express();
const port = process.env.PORT || 8080;

// Point static path to public
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(cors());


app.use('/customers', customerRoutes);

// For all other GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

const server = app.listen(port, function () {
  console.log('Listening on port ' + port);
});
