const orderDocment=require('../modals/ordermodal');



module.exports=async(req,res)=>{
    try{
     let user=req.user;
 
      const orders=await orderDocment.find({userId:user._id}).populate(['productId','customerId']).exec((err,data)=>{
    
        res.send(data);
        
      });

 
  
    }catch(err){

    }
}