const productDocument=require('../modals/productsModal');

module.exports=async(req,res,next)=>{
    try{
       
         const product=await productDocument.find({_id:req.query.id})
        res.render('edit-product',{
            product
        })  
    }catch(err){
console.log(err);
    }
}




