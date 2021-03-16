
const ShopDocument=require('../modals/shopmodal');



const Shopauth=async(req,res,next)=>{
    try{
        let shopOwner=req.shopuser;
                
        const shop=await ShopDocument.findOne({userID:shopOwner._id});
        if(shop==''||shop==[]){
            // console.log("hello ")
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