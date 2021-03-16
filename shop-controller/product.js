const productDocument=require('../modals/shopproductmodal');



module.exports=async(req,res)=>{
try{

      shopId=req.shop._id
     let product_added=new productDocument({
       productId:req.body.product,
       batchid:req.body.batchid,
       shopId,      
     })
  let product=await product_added.save();
   res.render('add-shop-product');
  }catch(err){
console.log(err);
}


}