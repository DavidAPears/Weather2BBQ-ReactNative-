const express = require('express');
const app = express();
const fetch = require('node-fetch')
const API_KEY = require('./api_key.js');
const four_square_client_key = require('./four_square_client_key.js');
const four_square_secret_key = require('./four_square_secret_key.js');
const GEO_KEY = require('./geo_key.js');


var port = process.env.PORT || 8083;

app.use(express.static('client/public'))
app.use(express.static('client/src'))

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};

app.use(allowCrossDomain);

app.get('/', function(req, res){
  console.log("RUNNING APP");
  res.sendFile('index.html');
});

// route for darksky data overcoming CORS issue
app.get('/weather/:location/:date' , function(req, res){
    const location = req.params.location;
    const date = req.params.date;

  const url = `https://api.darksky.net/forecast/${API_KEY}/${location},${date}`;
  console.log(url);
  fetch(url)
  .then(res =>  res.json())
  .then(data => res.json(data))
  .catch((err) =>{
    console.log(err);
  })

})

// route for geograph map api
app.get('/longlat/:input/' , function(req, res){
    const input = req.params.input;
    var matches = input.match(/\d+/g);

    if (matches === null){
      var url = `http://api.geograph.org.uk/syndicator.php?key=[GEO_KEY]&text=${input}&format=JSON`
    }else{
      var url = `http://api.geograph.org.uk/syndicator.php?key=[GEO_KEY]&location=${input}&format=JSON`;
    }

  fetch(url)
  .then(res =>  res.json())
  .then(data => res.json(data))
  .catch((err) =>{
    console.log(err);
  })

})

app.get('/hotel/:location' , function(req, res){
  const location = req.params.location;
  const url = `https://api.foursquare.com/v2/venues/search?client_id=${four_square_client_key}&client_secret=${four_square_secret_key}&v=20180323&limit=10&ll=${location}&query=hotel`;
  console.log(url);
  fetch(url)
  .then(res =>  res.json())
  .then(data => res.json(data))
  .catch((err) =>{
    console.log(err);
  })

})


app.listen(port, function(){
  console.log('The app is running on http://localhost:' + port)
});
