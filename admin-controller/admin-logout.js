const express=require('express');
const app=express();

const cookieparser=require('cookie-parser');

app.use(cookieparser());
module.exports=async(req,res)=>{
res.clearCookie('admin');
res.render('admin-login');
}

