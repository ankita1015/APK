//npm modules 
const express = require('express')
const path = require('path');
const app = express();
const hbs=require('hbs');
//project modules//
const ShopDocument=require('./modals/shopmodal');
const UserDocument=require('./modals/user');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');
require('./db/conn');

app.use(express.json());
app.use(express.urlencoded({extended:false}));
// veiw Directory path
const customerpath=path.join(__dirname,'./customermaster/views');
//javascript files//


//public STATIC PATH
app.use(express.static(path.join(__dirname, '/public/')))
app.use(express.static(path.join(__dirname, '/public/js')))

//set Engine
hbs.registerPartials(path.join(__dirname, './pars'));

app.set('view engine', 'hbs');





app.get('/', (req, res) => {
    res.render('index')
})
app.get('/signup',(req,res)=>{
    res.render('signup');
})
app.post('/',async(req,res)=>{
    try{
    
        if(req.body.pass===req.body.cpass){
            const User=new Schemas.UserDocument({
                    name:req.body.name,
                    email:req.body.email,
                    password:req.body.pass,
                    role:req.body.role,
                   });
                const token =await User.generateAuthoToken();
                
            const registred=await User.save();   
           if(req.body.role==0){
               res.render('add-shop');
           }else{
            res.status(200).render('index');
           }
         }else{
             res.render('signup',{
                 error:"Password Doesn't match",
            });
        }
    
              
    }catch(err){
    res.status(500).send(err);
    }

});

app.get('/login',(req,res)=>{
    res.render('login');
})
app.post('/login',async(req,res)=>{
    try{
        const userEmail=await UserDocument.findOne({email:req.body.email});
      
      
        if(userEmail===null){
          res.status(500).render('login',{
            email:req.body.email,
            error:'User not found',
          });
        }else{
            
            const isMatch=await bcrypt.compare(req.body.pass,userEmail.password);
            console.log(isMatch);
            const token =await userEmail.generateAuthoToken();
            console.log(token);
            if(isMatch){
               
             if(userEmail.role==0){
                res.status(200).render('ourorders');
            }else if(userEmail.role==1){
            res.status(200).render('index');
            }
        }else{
            res.status(500).render('login',{
                error_pasword:'Password Does not match',
               });

        }
        }

    }catch(err){
console.log(err);
    }
})
// seller side pages//
app.get('/add-product',(req,res)=>{
    res.render('add-product');
});
app.get('/ourorders',(req,res)=>{
    res.render('ourorders');
})
//viw product//
app.get('/view-product',(req,res)=>{
    res.render('view');
});
app.get('/shop',(req,res)=>{
res.render('add-shop');
});
app.post('/shop',async(req,res)=>{
try{
    console.log(req.body.mobile);
    const shop=new ShopDocument({
       shopname:req.body.shopname,
       state:req.body.state,
       city:req.body.city,
       address:req.body.add,
       area_code:req.body.code,
       mobileNo:req.body.mobile,
       email:req.body.email,
       website:req.body.website,

    });
  let shopCreated=await shop.save(); 
  res.render('ourorders');  
}catch(err){


}
});
app.get('/total-selling',(req,res)=>{
res.render('selling');

});

//Customer side Pages//
app.get('/single',(req,res)=>{
    res.render('single');
})
app.get('/product-list',(req,res)=>{
    res.render('product-list');
});
app.get('/cart',(req,res)=>{
    res.render('cart');
})
app.get('/order',(req,res)=>{
    res.render('order');
})
app.get('/history',(req,res)=>{
    res.render('history');
})

app.get('*',(req,res)=>{
    res.status(404).render('404');
})

//Seller side pages//



const PORT = process.env.PORT || 5000
    
app.listen(PORT, () => console.log(`server runnign at ${PORT}`))