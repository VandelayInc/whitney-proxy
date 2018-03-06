var express = require('express');
var app = express();
app.use('/rooms/:roomid', express.static(`${__dirname}/public/`));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/rooms/:roomid', (req,res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

app.get('/rooms/:roomid/reviews', (req,res) => {
  res.redirect('http://localhost:3004');
});

app.get('/rooms/:roomid/ratings', (req,res) => {
  res.redirect('http://localhost:3004');
});

app.listen(3000);