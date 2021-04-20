//npm modules 
const express = require('express')
const path = require('path');
const app = express();
const hbs=require('hbs');

const jwt=require('jsonwebtoken');
const UserDocument=require('./modals/user')
const customerRouter=require('./routers/customer-router')
const sellerRouter=require('./routers/seller-router')
const adminRouter=require('./routers/admin-router')

//project modules//

const cookieparser=require('cookie-parser');

app.use(express.json());
app.use(cookieparser());
app.use(express.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname, '/public/')))
app.use(express.static(path.join(__dirname, '/public/js')))

//set Engine
hbs.registerPartials(path.join(__dirname, './pars'));
app.set('view engine', 'hbs');

app.use(customerRouter)
app.use(sellerRouter)
app.use(adminRouter)


const PORT = process.env.PORT || 3000;
    
app.listen(PORT, () => console.log(`server runnign at ${PORT}`))