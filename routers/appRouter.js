const express=require('express');
const router=express.Router();
const auth=require('./middleware/auth');
app.use(express.urlencoded({extended:false}));

//project modules//
const ShopDocument=require('./modals/shopmodal');
const UserDocument=require('./modals/user');


router.get('/', (req, res) => {
    
    res.render('index');
})
router.get('/signup',(req,res)=>{
    res.render('signup');
})
router.post('/',require('./controller/signup'));

router.get('/login',(req,res)=>{
    res.render('login');
})
router.post('/login',require('./controller/login'));
// seller side pages//
router.get('/add-product',auth,(req,res)=>{
    console.log(auth());
    res.render('add-product');
});
router.get('/ourorders',auth,(req,res)=>{
    res.render('ourorders');
})
//viw product//
router.get('/view-product',auth,(req,res)=>{
    res.render('view');
});
router.get('/shop',auth,(req,res)=>{
res.render('add-shop');
});
router.post('/shop',auth,require('./controller/shop'));
router.get('/total-selling',auth,(req,res)=>{
res.render('selling');

});

//Customer side Pages//
router.get('/single',(req,res)=>{
    res.render('single');
})
router.get('/product-list',(req,res)=>{
    res.render('product-list');
});
router.get('/cart',auth,(req,res)=>{
    res.render('cart');
})
router.get('/order',auth,(req,res)=>{
    res.render('order');
})
router.get('/history',(req,res)=>{
    res.render('history');
})
router.get('/logout',auth,async(req,res)=>{
    res.clearCookie('user');
    console.log('logout sucessfully');
    await req.user.save();
    res.render('login');
    
    
});


router.get('*',(req,res)=>{
    res.status(404).render('404');
})

module.exports=router;