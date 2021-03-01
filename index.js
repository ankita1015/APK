//npm modules 
const express = require('express')
const path = require('path');
const app = express();
const hbs=require('hbs');
const bodyparser=require('body-parser');
//sing godi


//project modules//
const cookieparser=require('cookie-parser');
const auth=require('./middleware/auth');

const cart=require('./middleware/cart');
const customer=require('./middleware/order');
const shopAuth=require('./middleware/shopauth');

const adminauth=require('./middleware/adminauth');



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

app.get('/',require('./customer-controller/show-shop-product'));
app.get('/signup',(req,res)=>{
    res.render('signup');
})


app.post('/add-cart',auth,require('./customer-controller/add-cart'));
app.post('/delete-cart-product',require('./customer-controller/delete-cart'),cart);
app.post('/',require('./customer-controller/signup'));
app.get('/make-order',auth,customer,(req,res)=>{
    res.status(200).render('make-order');
})

app.post('/login',require('./customer-controller/login'));

// seller side pages//
app.get('/add-product',auth,(req,res)=>{
    
    res.render('add-shop-product',{
        shopname:req.shopname,
    });
});
app.post('/load-all-products',require('./shop-controller/load-all-products'))
app.post('/product',require('./shop-controller/product'));
app.get('/ourorders',auth,shopAuth,(req,res)=>{
  res.render('ourorders');
})
//view order//
app.get('/view-order',(req,res)=>{
    res.render('view-order');
})
//viw product//
app.get('/view-product',auth,shopAuth,require('./customer-controller/view'));
app.get('/shop',auth,shopAuth,(req,res)=>{
  res.status(200).render('ourorders');
});
app.post('/shop',auth,require('./shop-controller/shop'));
app.get('/total-selling',auth,shopAuth,(req,res)=>{
res.render('selling');

});

//Customer side Pages//
app.get('/single',(req,res)=>{
    res.render('single');
})
app.get('/product-list',auth,require('./customer-controller/load-category-product'));
app.get('/cart',auth,(req,res)=>{
    cart(req,res);
})
app.post('/total-cart-product',auth,require('./customer-controller/total-product-cart'));

app.post('/customer',auth,require('./customer-controller/make-order'));
app.get('/order',auth,customer,require('./customer-controller/view-our-order'));
app.get('/insert-order',auth,customer,require('./customer-controller/final-order'));
app.get('/history',(req,res)=>{
    res.render('history');
})
app.get('/logout',auth,require('./customer-controller/logout'));
//admin panel//
app.get('admin/admin-login',(req,res)=>{
    res.render('admin-login');
})
app.get('/admin',adminauth,(req,res)=>{
    res.render('admin-index');
})
app.get('/add-products',adminauth,(req,res)=>{
    res.render('add-product');
})


app.get('/add-admin',adminauth,(req,res)=>{
    res.render('add-admin');
});
app.get('/users',adminauth,(req,res)=>{
    res.render('users');
})

app.post('/users',require('./admin-controller/show-users'))
app.post('/products',require('./admin-controller/show-product'))
app.post('/admin-login',require('./admin-controller/admin-login'));
app.post('/admin-details',require('./admin-controller/add-admin'));
app.post('/admin-product',require('./admin-controller/add-product'));
app.post('/show-products',require('./admin-controller/show-product'));
app.get('/edit-product',require('./admin-controller/edit-product'))
app.post('/updated-product',require('./admin-controller/update-product'))
app.post('/delete-products',require('./admin-controller/delete-product'))
app.post('/search-product',require('./admin-controller/search-product'));
app.get('/admin-logout',require('./admin-controller/admin-logout'));
app.get('*',(req,res)=>{
    res.status(404).render('404');
})

//Seller side pages//



const PORT = process.env.PORT || 5000;
    
app.listen(PORT, () => console.log(`server runnign at ${PORT}`))