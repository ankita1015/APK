const productDocument=require('../modals/productmodal');
const upload=require('../middleware/upload');

module.exports=async(req,res)=>{
  let images=Array();
  upload(req,res,(err)=>{
    req.files.forEach(element => {
      images.push(element);
    });
})

try{
const product=new productDocument({
       productname:'flang',
       batchid:'123',
       description:'hdjfbvdhffvbhbjhfv f',
       gst:10,
       qty:22,
       price:2000,
       total_price:2200,
      //  images:images,
       shopid:req.shop._id,
    });

const productCreated=await product.save();
if(productCreated){
    res.status(200).render('view');
}
  }catch(err){
console.log(err);
}

}