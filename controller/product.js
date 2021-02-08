const productDocument=require('../modals/productmodal');


module.exports=async(req,res)=>{

try{
 let gstAmount = (req.body.price * req.body.gst)/100;
 let total_price=gstAmount+req.body.price;
    const product=new productDocument({
      productname:req.body.product,
      batchid:req.body.batchid,
      description:req.body.description,
      gst:req.body.gst,
      price:req.body.price,
      total_price,
      images:,
      shopid:req.shop._id,
    });

}catch(err){

}

}