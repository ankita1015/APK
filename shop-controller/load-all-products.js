const productDocument=require('../modals/productsModal');

module.exports=async(req,res)=>{
    try{
     const products=await productDocument.find({})

     res.send(products);
     
    }catch(err){

    }
}