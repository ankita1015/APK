const productDocument=require('../modals/productmodal');
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
 
// let uplaodimg=new productDocument();
const product=new productDocument({
       productname:'flang',
       batchid:'123',
       description:'hdjfbvdhffvbhbjhfv f',
       gst:10,
       qty:22,
       price:2000,
       total_price:2200,
       images:uploadimages,
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
}