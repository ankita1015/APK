const productDocument=require('../modals/productsModal');

module.exports=async(req,res)=>{
try{
    let product=req.query.product_id;


    await productDocument.find({category:product}).exec((err,data)=>{
        
        res.render('product-list',{
            data,
        });

    });
  
}catch(err){

}
}
