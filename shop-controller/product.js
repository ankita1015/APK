const productDocument=require('../modals/shopproductmodal');



module.exports=async(req,res)=>{
try{
console.log(req.body);
     let product_added=new productDocument({
       productId:req.body.product,
       batchid:req.body.batchid
     })
  let product=await product_added.save();
   res.render('add-shop-product');
  }catch(err){
console.log(err);
}


}