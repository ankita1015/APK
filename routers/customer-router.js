const express=require('express');
const router=express.Router();
const auth=require('../middleware/auth')
const customer=require('../middleware/order');
const shopuser = require('../middleware/shop_user_auth');
const shopAuth=require('../middleware/shopauth');


router.get('/',require('../customer-controller/show-shop-product'));
router.get('/signup',(req,res)=>{
    res.render('signup');
})
router.post('/auth',async(req,res)=>{
    const token=req.cookies.user;
    const verifyuser=await jwt.verify(token,'mynameiskunjanbarotprogrammer');
    const user= await UserDocument.findOne({_id:verifyuser._id});
    req.token=token;
    if(user.role=='0'){
       let name=user.name;
      
          res.send(name);

    }
})
router.post('/order',auth,require('../customer-controller/view-our-order'));
router.post('/add-cart',auth,require('../customer-controller/add-cart'));
router.post('/delete-cart-product',require('../customer-controller/delete-cart'));
router.post('/',require('../customer-controller/signup'));
router.post('/confirm-order',auth,customer,require('../customer-controller/final-order'));
router.get('/make-order',auth,customer,(req,res)=>{
    res.status(200).render('make-order');
})
router.get('/order',auth,(req,res)=>{
  res.render('order');   
})
router.get('/login',(req,res)=>{
    res.render('login')
})
router.post('/login',require('../customer-controller/login'));

router.get('/add-product',shopuser,(req,res)=>{
    
    res.render('add-shop-product',{
        shopname:req.shopname,
    });
});
router.get('/more-information-product',require('../customer-controller/more-product-infomation'))
router.get('/view-product',shopuser,shopAuth,require('../customer-controller/view'));


router.post('/single-product',require('../customer-controller/single-product'));

router.get('/product-list',require('../customer-controller/load-category-product'));
router.post('/related-product',require('../customer-controller/related-product'))
router.get('/cart',auth,(req,res)=>{   
  res.render('cart');
})
router.post('/load-cart-products',auth,require('../customer-controller/cart'));
router.post('/total-cart-product',auth,require('../customer-controller/total-product-cart'));
router.post('/customer',auth,require('../customer-controller/customer'));
router.post('/load-order-shop',require('../customer-controller/load-shop'));
router.post('/edit-address',require('../customer-controller/edit-address'))
router.post('/payment',require('../customer-controller/payment'));
router.post('/delete-order',require('../customer-controller/delete-order'));
router.post('/search-product',require('../customer-controller/search-product'));
router.get('/history',(req,res)=>{
    res.render('history');
})
router.post('/genrate-bill',require('../customer-controller/genrate-bill'))
router.post('/order-history',auth,require('../customer-controller/order-history'));
router.get('/logout',auth,require('../customer-controller/logout'));

module.exports=router