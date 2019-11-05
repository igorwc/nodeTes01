const express = require('express');
require('marko/node-require').install();
require('marko/express');
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
 
app.use('/estatico', express.static('src/app/public'));
const rotas = require('../app/rotas/rotas.js');
rotas(app);
module.exports = app;