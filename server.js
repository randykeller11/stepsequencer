const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();


app.get('/ping', function (req, res) {
 return res.send('pong');
});

console.log("sup");

app.listen(process.env.PORT || 3000);