const productDocument=require('../modals/productsModal');

module.exports=async(req,res)=>{
    try{
      let value=req.body.value;    
      
      const products=await productDocument.find({$regex:{productname:value}}).exec((err,data)=>{
      
       res.send(data);
      
   
   });
  


    }catch(err){
console.log(err);
    }
}
