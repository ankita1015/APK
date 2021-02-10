
const ShopDocument=require('../modals/shopmodal');



const Shopcookie=async(req,res,next)=>{
    try{
        let shopOwner=req.user;
        
        const shop=await ShopDocument.findOne({userID:shopOwner._id});
        if(shop){
            
            res.cookie('shop',shop,{
                httpOnly:true
            })
            next();

        }else{
            res.status(200).render('add-shop');
            next();
        }
        }catch(err){
            res.status(500).json(err);
        }
    


}

module.exports=Shopcookie;