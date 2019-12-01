var express = require('express')
var app = express()
var reouteEmp = require('./route/emp')

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use("/emp",reouteEmp)
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(9898, () => console.log(`Example app listening on port 9898!`))