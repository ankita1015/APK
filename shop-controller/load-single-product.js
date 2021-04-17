const shopproductDocument=require('../modals/shopproductmodal');

module.exports=async(req,res)=>{
    try{
        let _id=req.body.id;
         
          
         await shopproductDocument.find({_id}).populate(['productId','category']).exec((err,data)=>{
         console.log(data);
            res.send(data);
            
         })

 
    }catch(err){

    }
}