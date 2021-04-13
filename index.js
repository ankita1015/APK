//npm modules 
const express = require('express')
const path = require('path');
const app = express();
const hbs=require('hbs');
const bodyparser=require('body-parser');
const jwt=require('jsonwebtoken');
const UserDocument=require('./modals/user')



//project modules//

const cookieparser=require('cookie-parser');
const auth=require('./middleware/auth');


const customer=require('./middleware/order');
const shopAuth=require('./middleware/shopauth');

const adminauth=require('./middleware/adminauth');
const shopuser = require('./middleware/shop_user_auth');



// const upload=require('./middleware/upload');
app.use(express.json());
app.use(cookieparser());
app.use(express.urlencoded({extended:false}));
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
app.post('/auth',async(req,res)=>{
    const token=req.cookies.user;
    const verifyuser=await jwt.verify(token,'mynameiskunjanbarotprogrammer');
    const user= await UserDocument.findOne({_id:verifyuser._id});
    req.token=token;
    if(user.role=='0'){
       let name=user.name;
      
          res.send(name);

    }
})
app.post('/order',auth,require('./customer-controller/view-our-order'));
app.post('/add-cart',auth,require('./customer-controller/add-cart'));
app.post('/delete-cart-product',require('./customer-controller/delete-cart'));
app.post('/',require('./customer-controller/signup'));
app.post('/confirm-order',auth,customer,require('./customer-controller/final-order'));
app.get('/make-order',auth,customer,(req,res)=>{
    res.status(200).render('make-order');
})
app.get('/order',(req,res)=>{ 
    res.render('order');
})


app.post('/login',require('./customer-controller/login'));

// seller side pages//
app.get('/add-product',shopuser,(req,res)=>{
    
    res.render('add-shop-product',{
        shopname:req.shopname,
    });
});
app.post('/load-all-products',require('./shop-controller/load-all-products'))
app.post('/product',shopuser,shopAuth,require('./shop-controller/product'));
app.get('/single-product',require('./customer-controller/single-product'));
app.get('/ourorders',shopuser,shopAuth,(req,res)=>{
  res.render('ourorders');
})
app.post('/load-all-shop-products',shopuser,shopAuth,require('./shop-controller/load-all-shop-product'));
app.get('/order-details',shopuser,shopAuth,require('./shop-controller/order-details'))
app.post('/shop-order',shopuser,shopAuth,require('./shop-controller/shop-order'))
//view order//
app.post('/order-success',require('./shop-controller/order-success'))
app.get('/view-order',(req,res)=>{
    res.render('view-order');
})
//viw product//
app.get('/view-product',shopuser,shopAuth,require('./customer-controller/view'));
app.get('/shop-login',(req,res)=>{
    res.render('shop-login')
})

app.get('/shop',shopuser,shopAuth,(req,res)=>{
  res.status(200).render('ourorders');
});
app.post('/shop',shopuser,require('./shop-controller/shop'));
app.get('/total-selling',shopuser,shopAuth,(req,res)=>{
res.render('selling');

});
app.post('/total-selling',shopuser,shopAuth,require('./shop-controller/total-selling'))
app.get('/shop-logout',shopuser,require('./shop-controller/shop-logout'));

// Customer side Pages

app.get('/product-list',auth,require('./customer-controller/load-category-product'));
app.get('/cart',auth,(req,res)=>{   
  res.render('cart');
})
app.post('/load-cart-products',auth,require('./customer-controller/cart'));
app.post('/total-cart-product',auth,require('./customer-controller/total-product-cart'));
app.post('/customer',auth,require('./customer-controller/customer'));
app.post('/load-order-shop',require('./customer-controller/load-shop'));
app.get('/insert-order',auth,customer,require('./customer-controller/order-preview'))
app.post('/edit-address',require('./customer-controller/edit-address'))
app.post('/payment',require('./customer-controller/payment'));
app.post('/delete-order',require('./customer-controller/delete-order'));
app.post('/search-product',require('./customer-controller/search-product'));
app.get('/history',(req,res)=>{
    res.render('history');
})
app.post('/order-history',auth,require('./customer-controller/order-history'));
app.get('/logout',auth,require('./customer-controller/logout'));

//admin panel//
app.get('/admin-login',(req,res)=>{
    res.render('admin-login');
})
app.get('/admin',adminauth,(req,res)=>{
    res.render('admin-index');
})
app.get('/add-products',adminauth,(req,res)=>{
    res.render('add-product');
})
app.get('/add-admin',(req,res)=>{
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
app.post('/add-category',require('./admin-controller/add-category'));
app.post('/load-all-category',require('./admin-controller/load-category'));
app.post('/delete-category',require('./admin-controller/delete-category'));
app.post('/delete-sub-category',require('./admin-controller/delete-sub-category'));
app.post('/edit-category',require('./admin-controller/edit-category'));
app.post('/update-category',require('./admin-controller/update-category'));
app.post('/update-sub-category',require('./admin-controller/update-sub-category'))
app.post('/add-sliderimg',require('./admin-controller/sliderimg'))
app.post('/load-slider-img',require('./admin-controller/load-slider-img'))
app.get('/sub-category',adminauth,(req,res)=>{
     res.render('add-sub-category');
})
app.post('/sub-category',require('./admin-controller/add-sub-category'));
app.get('/category',adminauth,(req,res)=>{
    res.render('add-category');
})
app.post('/load-sub-category',require('./admin-controller/load-sub-category'))
app.get('/add-slider-img',adminauth,(req,res)=>{
    res.render('update-slider')
})
app.post('/load-single-sub-category',require('./admin-controller/load-single-sub-category'))
app.post('/search-category',require('./admin-controller/search-category'))
app.get('/l',(req,res)=>{
    res.render('L1');
})

app.get('/si',(req,res)=>{
    res.render('si');
})

app.get('/orderconfi',(req,res)=>{
    res.render('orderconfi');
})

app.get('/pr',(req,res)=>{
    res.render('pr');
})

app.get('/shoppingcart',(req,res)=>{
    res.render('shoppingcart');
})

app.get('*',(req,res)=>{
    res.status(404).render('404');
})

//Seller side pages//



const PORT = process.env.PORT || 5000;
    
app.listen(PORT, () => console.log(`server runnign at ${PORT}`))