const ShopDocument=require('../modals/shopmodal');


module.exports=async(req,res)=>{

    try{
      
        const shop=new ShopDocument({
              shopname:req.body.shopname,
              state:req.body.state,
              city:req.body.city,
              address:req.body.add,
              area_code:req.body.code,
              mobileNo:req.body.mobile,
              email:req.body.email,
              website:req.body.website,
              userId:req.user._id,
           });
         await shop.save(); 
         res.render('ourorders');  
       }catch(err){
       console.log(err);
       
       }
}