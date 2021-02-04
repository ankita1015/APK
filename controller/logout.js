const 
const jwt=require('jsonwebtoken');
const cookieparser=require('cookie-parser');


module.exports=async(req,res)=>{
res.clearcookie('user');
console.log('Logout successfully');
await req.user.save();
}




