var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(request, response){
    console.log('hello world');
});

app.listen(8000);
console.log('server is running');