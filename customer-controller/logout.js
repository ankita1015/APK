const express=require('express');
const app=express();

const cookieparser=require('cookie-parser');

app.use(cookieparser());
module.exports=async(req,res)=>{
res.clearCookie('user');
res.clearCookie('shop');

await req.user.save();
await req.shop.save();
res.render('index');
}




