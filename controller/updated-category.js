const categoryDocument=require('../modals/categorymodel');

module.exports=async(req,res,next)=>{
    try{
        
         const updatedcategory=await categoryDocument.updateMany({_id:req.body.categoryid},
        {$set:{productId:req.body.product,
               categoryname:req.body.category,
               decription:req.body.description}});
            
            // const updated=await updatedcategory.save();
                 
        next();
    }catch(err){

    }
}