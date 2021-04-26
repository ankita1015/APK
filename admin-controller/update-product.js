const productDocument=require('../modals/productsModal');
const upload=require('../middleware/upload')
const fs=require('fs')


module.exports=(req,res,next)=>{
  let uploadimages=Array();
  
    upload(req,res,(err)=>{
      
  
    if(req.files!=''){
    req.files.forEach(element => {
      //get path from images//
       let imgpath=element.path;
     //make path correct with splite function//
       let  fixpath=imgpath.split('\\')
      //make array of path//
        uploadimages.push(`/${fixpath[1]}/${fixpath[2]}`);
     });
     
     updateproduct(uploadimages);
    }else{
      updateproduct(req.body.imgsrc)
    }
})
async function updateproduct(uploadimages){
try{
  const updatedproduct= await productDocument.updateMany({ _id:req.body.productid},
    {$set:{
        product:req.body.product,
        product_cat:req.body.category,
        gst:req.body.gst,
        price:req.body.price,
        totol_price:req.body.total_price,
        images:uploadimages
    }})
  let imgsrc=req.body.imgsrc;
 
  if(req.files!=''){
  if(imgsrc!=''){

   imgsrc.forEach(img=>{
     console.log(img)
     
    fs.unlinkSync(`./public${img}`);

   })
  }
}
 res.render('admin-index')
 
  }catch(err){
console.log(err)
}

}
}




