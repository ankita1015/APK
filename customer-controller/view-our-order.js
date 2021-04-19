const orderDocment=require('../modals/shopordermodal');



module.exports=async(req,res)=>{
    try{
     let user=req.user;
     
      const orders=await orderDocment.find(
        {$and:[{userId:user._id},
              {status:{$ne:'Deliverd'}}
              ]})
              .populate(['productId','shopId','category'])
              .exec((err,data)=>{
            
               if(data.length==0 || data==undefined){
               res.send('1')
        
               }else{
               res.send(data);
      
               }
      });

 
  
    }catch(err){

    }
}