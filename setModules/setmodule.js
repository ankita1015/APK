const express = require('express')
const path = require('path');
const app = express();
const hbs=require('hbs');

const jwt=require('jsonwebtoken');
const cookieparser=require('cookie-parser');





app.use(express.json());
app.use(cookieparser());
app.use(express.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname, '/public/')))
app.use(express.static(path.join(__dirname, '/public/js')))

//set Engine
hbs.registerPartials(path.join(__dirname, './pars'));
app.set('view engine', 'hbs');