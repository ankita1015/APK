const ShopDocument=require('../modals/shopmodal');


module.exports=async(req,res)=>{

    try{
        console.log(req.body);    
        const shop=new ShopDocument({
              shopname:req.body.shopname,
              state:req.body.state,
              city:req.body.city,
              address:req.body.address1,
              address2:req.body.address2,
              area_code:req.body.code,
              mobileNo:req.body.mobileNo,
              userID:req.shopuser._id,
           });
         let shopToken=shop;
         res.cookie('shop',shopToken,{
              httpOnly:true,
              
         })
         await shop.save();
               
         res.send('1')  
       }catch(err){
       console.log(err);
       
       }
}