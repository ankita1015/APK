const jwt=require('jsonwebtoken');
const UserDocument=require('../modals/user');



const auth=async(req,res,next)=>{

    try{
        const token=req.cookies.user;
        
        
        const verifyuser=await jwt.verify(token,'mynameiskunjanbarotprogrammer');
        const user= await UserDocument.findOne({_id:verifyuser._id});
        req.token=token;
        if(user.role=='0'){
        req.user=user;
        }else{
          req.shopuser=user; 
        }
        next();
         
    }catch(err){
         res.render('login',{
             err:'1',
         });

    }
}

module.exports=auth;