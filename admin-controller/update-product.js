const productDocument=require('../modals/productsModal');


module.exports=async(req,res,next)=>{
try{
const updatedproduct= await productDocument.updateMany({ _id:req.body.productid},
    {$set:{
        product:req.body.product,
        product_cat:req.body.category,
        gst:req.body.gst,
        price:req.body.price,
        totol_price:req.body.total_price
    }})
  
  res.render('admin-index');
}
catch(err){
console.log(err)
}
}