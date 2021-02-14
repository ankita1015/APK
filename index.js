//npm modules 
const express = require('express')
const path = require('path');
const app = express();
const hbs=require('hbs');
const bodyparser=require('body-parser');


//project modules//
const cookieparser=require('cookie-parser');
const auth=require('./middleware/auth');
const Shopauth=require('./middleware/shopauth');

const ShopDocument = require('./modals/shopmodal');

// const upload=require('./middleware/upload');
app.use(bodyparser.json());
app.use(cookieparser());
app.use(bodyparser.urlencoded({extended:false}));

//public STATIC PATH
app.use(express.static(path.join(__dirname, '/public/')))
app.use(express.static(path.join(__dirname, '/public/js')))

//set Engine
hbs.registerPartials(path.join(__dirname, './pars'));
app.set('view engine', 'hbs');

app.get('/',require('./controller/show-product'));
app.get('/signup',(req,res)=>{
    res.render('signup');
})
app.post('/',require('./controller/signup'));


app.post('/login',require('./controller/login'));

// seller side pages//
app.get('/add-product',auth,Shopauth,(req,res)=>{
    
    res.render('add-product',{
        shopname:req.shopname,
    });
});

app.post('/product',auth,Shopauth,require('./controller/product'));
app.get('/ourorders',auth,Shopauth,(req,res)=>{
    res.render('ourorders',{
        shopname:req.shopname
    });
})
//view order//
app.get('/view-order',(req,res)=>{
    res.render('view-order');
})
//viw product//
app.get('/view-product',auth,Shopauth,require('./controller/view'));
app.get('/shop',auth,Shopauth,async(req,res)=>{
  res.status(200).render('ourorders');
});
app.post('/shop',auth,require('./controller/shop'));
app.get('/total-selling',auth,Shopauth,(req,res)=>{
res.render('selling');

});

//Customer side Pages//
app.get('/single',(req,res)=>{
    res.render('single');
})
app.get('/product-list',(req,res)=>{
    res.render('product-list');
});
app.get('/cart',auth,(req,res)=>{
    res.render('cart');
})
app.get('/order',auth,(req,res)=>{
    res.render('order');
})
app.get('/history',(req,res)=>{
    res.render('history');
})
app.get('/logout',auth,Shopauth,require('./controller/logout'));


app.get('*',(req,res)=>{
    res.status(404).render('404');
})

//Seller side pages//



const PORT = process.env.PORT || 5000;
    
app.listen(PORT, () => console.log(`server runnign at ${PORT}`))