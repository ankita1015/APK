const jwt=require('jsonwebtoken');
const ShopDocument=require('../modals/shopmodal');



const Shopauth=async(req,res,next)=>{
    try{
        const shoptoken=req.cookies.shop;
        console.log(shoptoken);
        const shop=await ShopDocument.findOne({_id:_id,shopname:shopname});
        req.shoptoken=shop;
        req.shop=shop;
        req.shopname=shop.shopname;
        next();
       
    }catch(err){
        console.log(err);
        res.render('add-shop');
    
    }


}

module.exports=Shopauth;