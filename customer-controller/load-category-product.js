const categoryDocument=require('../modals/categorymodel');

module.exports=async(req,res)=>{
try{
    let id=req.query.product_id;
 
    const category=await categoryDocument.find({productId:id}).populate('productId').exec((err,data)=>{
        
        res.render('product-list',{
            data,
        });

    });
  
}catch(err){

}
}
