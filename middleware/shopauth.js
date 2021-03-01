
const ShopDocument=require('../modals/shopmodal');



const Shopauth=async(req,res,next)=>{
    try{
        let shopOwner=req.user;
        console.log(shopOwner); 
        const shop=await ShopDocument.findOne({userID:shopOwner._id});
        if(shop==''||shop==[]){
            res.status(500).render('add-shop');
           
        }else{
        req.shop=shop;
        req.shopname=shop.shopname;

        next();
        }
        }
        catch(err){
            res.status(500).render('add-shop');
        }
    


}

module.exports=Shopauth;