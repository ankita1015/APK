const productDocument=require('../modals/productsModal');

module.exports=async(req,res)=>{
try{
    let product=req.body.product_id;
       
 
     if(product=='' || product==undefined){
      await productDocument.find({}).limit(10).exec((err,data)=>{
         
        res.send(data);
      });
    }else{
    await productDocument.find({category:product}).exec((err,data)=>{
     res.send(data);
     });
  

}
  
}catch(err){

}
}
