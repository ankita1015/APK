
const ShopDocument=require('../modals/shopmodal');



const Shopauth=async(req,res,next)=>{
    try{
        let shopOwner=req.user;
        
        const shop=await ShopDocument.findOne({userID:shopOwner._id});
        
        req.shop=shop;
        req.shopname=shop.shopname;

        next();

        }
        catch(err){
            res.status(500).render('add-shop');
        }
    


}

module.exports=Shopauth;