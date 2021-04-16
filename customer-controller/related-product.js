const productDocument=require('../modals/productsModal');

module.exports=async(req,res)=>{
try{
    let product=req.body.product_id;
   
 

    await productDocument.find({category:product}).exec((err,data)=>{
        
      res.send(data);
 
    

    });
  
}catch(err){

}
}
