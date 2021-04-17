const productDocument=require('../modals/shopproductmodal');



module.exports=async(req,res)=>{
try{

      let shopId=req.shop._id
      let category=req.body.product_category;
      
      let sub_category={category_name:req.body.category_name,
                    category_value:req.body.sub_category}
       let product_added=new productDocument({
        productId:req.body.product,
        sub_category,
        category,
        qty:req.body.qty,
        gst:req.body.gst,
        price:req.body.price,
        total_price:req.body.total_price,
        batchid:req.body.batchid,
        
        shopId,      
      })
   let product=await product_added.save();
   res.render('add-shop-product');
  }catch(err){
console.log(err);
}


}