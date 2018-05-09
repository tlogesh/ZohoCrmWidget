'use strict';

const http = require('http');
const express = require('express');
const {urlencoded} = require('body-parser');

let app = express();
app.use(express.static(__dirname + '/public'));
app.use(urlencoded({extended: false}));

let server = http.createServer(app);
let port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Express Server listening on *:${port}`);
});

module.exports = app;