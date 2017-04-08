var express = require('express');


var app = express();
// const is use so value can't be change
// const is convensionally use to be uppercase
const PORT = process.env.PORT || 3000;

// express middleware sample
app.use(function(req, res, next){
  // x-forwarded-proto is either https or http
  if(req.headers['x-forwarded-proto'] === 'https'){
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
})
app.use(express.static('public'));


app.listen(PORT, function(){
  console.log("Express server is up on port" + PORT);
});
