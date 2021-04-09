const jwt=require('jsonwebtoken');
const UserDocument=require('../modals/user');



const shopuser=async(req,res,next)=>{

    try{
        const token=req.cookies.shopuser;
        
        
        const verifyuser=await jwt.verify(token,'mynameiskunjanbarotprogrammer');
        const user= await UserDocument.findOne({_id:verifyuser._id});
        req.token=token;
        req.shopuser=user; 
        
        next();
         
    }catch(err){
         res.render('shop-login',{
             err:'1',
         });

    }
}

module.exports=shopuser;