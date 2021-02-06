const jwt=require('jsonwebtoken');
const ShopDocument=require('../modals/shopmodal');



const Shopauth=async(req,res,next)=>{

    try{
        const token=req.cookies.shop;
      
        const verifyShop=await jwt.verify(token,'mynameiskunjanbarotprogrammer');
        
        const shop= await ShopDocument.findOne({_id:verifyShop._id});
        req.shoptoken=token;
        req.shop=shop;
        next();
         
    }catch(err){
        res.render('add-shop');
    
    }


}

module.exports=Shopauth;