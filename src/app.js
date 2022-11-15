const express = require('express');

const app = express();
app.set('port', process.env.PORT || 3001);

app.get('/', require('./routes'));

module.exports = app;
