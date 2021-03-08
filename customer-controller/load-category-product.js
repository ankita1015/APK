const productDocument=require('../modals/productsModal');

module.exports=async(req,res)=>{
try{
    let product=req.query.product_name;


    await productDocument.find({product}).exec((err,data)=>{
        
        res.render('product-list',{
            data,
        });

    });
  
}catch(err){

}
}
