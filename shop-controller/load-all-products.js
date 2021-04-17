const productDocument=require('../modals/productsModal');

module.exports=async(req,res)=>{
    try{
        let id=req.body.id;
     const products=await productDocument.find({category:id})

     res.send(products);
     
    }catch(err){

    }
}