var express = require('express'),
  app = express(),
  port = process.env.PORT || 6666;

app.listen(port);

console.log('RESTful API server For Testing started on: ' + port);