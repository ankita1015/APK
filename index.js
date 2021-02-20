//npm modules 
const express = require('express')
const path = require('path');
const app = express();
const hbs=require('hbs');
const bodyparser=require('body-parser');

// jk
//aa
//project modules//
const cookieparser=require('cookie-parser');
const auth=require('./middleware/auth');
const Shopauth=require('./middleware/shopauth');
const cart=require('./middleware/cart');
const order=require('./middleware/order');
const ShopDocument = require('./modals/shopmodal');
const { request } = require('http');

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

app.get('/',require('./controller/show-shop-product'));
app.get('/signup',(req,res)=>{
    res.render('signup');
})


app.post('/add-cart',auth,require('./controller/add-cart'));
app.post('/delete-cart-product',require('./controller/delete-cart'),cart);
app.post('/',require('./controller/signup'));
app.get('/make-order',auth,order,(req,res)=>{
    res.status(200).render('make-order');
})

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
app.get('/shop',auth,Shopauth,(req,res)=>{
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
    cart(req,res);
})
app.post('/total-cart-product',auth,require('./controller/total-product-cart'));

app.post('/customer',auth,require('./controller/make-order'));
app.get('/order',auth,order,(req,res)=>{
    res.status(200).render('order');
})
app.get('/history',(req,res)=>{
    res.render('history');
})
app.get('/logout',auth,Shopauth,require('./controller/logout'));
//admin panel//
app.get('/admin-login',(req,res)=>{
    res.render('admin-login');
})
app.get('/admin-index',(req,res)=>{
    res.render('admin-index');
})
app.get('/category',(req,res)=>{
    let id=req.query.id;
 
    res.render('category',{
        cat_id:id,
    });
})
app.get('/add-category',(req,res)=>{
res.render('add-category');
});
app.get('/add-admin',(req,res)=>{
    res.render('add-admin');
})
app.post('/add-admin',require('./controller/add-admin'));
app.get('/edit-category',require('./controller/edit-category'));
app.post('/updated-category',require('./controller/updated-category'));
app.post('/load-all-category',require('./controller/load-all-category'));
app.post('/add-products',require('./controller/add-product'));
app.post('/show-products',require('./controller/show-product'));
app.post('/delete-product',require('./controller/delete-product'))
app.post('/add-category',require('./controller/add-category'));
app.post('/categorys',require('./controller/load-category'));
app.post('/delete-category',require('./controller/delete-category'));
app.get('*',(req,res)=>{
    res.status(404).render('404');
})

//Seller side pages//



const PORT = process.env.PORT || 5000;
    
app.listen(PORT, () => console.log(`server runnign at ${PORT}`))