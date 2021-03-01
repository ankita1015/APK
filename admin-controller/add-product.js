const productDocument=require('../modals/productsModal');
const upload=require('../middleware/upload');

module.exports=(req,res)=>{
  let uploadimages=Array();
    upload(req,res,(err)=>{
   
    req.files.forEach(element => {
      //get path from images//
       let imgpath=element.path;
     //make path correct with splite function//
       let  fixpath=imgpath.split('\\')
      //make array of path//
        uploadimages.push(`/${fixpath[1]}/${fixpath[2]}`);
     });
     
     product(uploadimages);
})
async function product(uploadimages){
try{
console.log(req.body);
  const product=new productDocument({
       
     product:req.body.product,
     product_cat:req.body.category,
     images:uploadimages,
     gst:req.body.gst,
     price:req.body.price,
     total_price:req.body.total_price

    });

const productCreated=await product.save();
res.render('add-product');
  }catch(err){
console.log(err)
}

}
}