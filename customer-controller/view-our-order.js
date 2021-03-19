const orderDocment=require('../modals/shopordermodal');



module.exports=async(req,res)=>{
    try{
     let user=req.user;
 
      const orders=await orderDocment.find({userId:user._id}).populate(['productId','customerId','shopId']).exec((err,data)=>{

        if(data.length==0 || data==undefined){
          res.send('1')
        }else{
        res.send(data);
        }
      });

 
  
    }catch(err){

    }
}