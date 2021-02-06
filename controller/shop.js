const ShopDocument=require('../modals/shopmodal');


module.exports=async(req,res)=>{

    try{
      
        const shop=new ShopDocument({
              shopname:req.body.shopname,
              state:req.body.state,
              city:req.body.city,
              address:req.body.address1,
              address2:req.body.address2,
              area_code:req.body.code,
              mobileNo:req.body.mobileNo,
              userID:req.user._id,
           });
         const shoptoken=await shop.generateAuthoToken();
         res.cookie('shop',shoptoken,{
           httpOnly:true,
              
         })
         await shop.save();
               
         res.render('ourorders');  
       }catch(err){
       console.log(err);
       
       }
}