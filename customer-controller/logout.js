const express=require('express');
const app=express();

const cookieparser=require('cookie-parser');

app.use(cookieparser());
module.exports=async(req,res)=>{
res.clearCookie('user');
res.clearCookie('shop');

res.render('index');
}




