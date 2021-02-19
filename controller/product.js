const productDocument=require('../modals/shopproductmodal');
const categoryDocument=require('../modals/categorymodel');
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
 const category=new categoryDocument({
   productname:req.body.product,
   category:req.body.category
 })
const categorydoc=await category.save();

const product=new productDocument({
       batchid:req.body.batchid,
       description:req.body.description,
       gst:req.body.gst,
       qty:req.body.Qty,
       price:req.body.price,
       total_price:req.body.total_price,
       images:uploadimages,
       shopid:req.shop._id,
       categoryId:category._id,

    });

const productCreated=await product.save();
if(productCreated){
    res.status(200).render('view');
 }
  }catch(err){
console.log(err);
}

}
}