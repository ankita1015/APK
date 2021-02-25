const categoryDocument=require('../modals/categorymodel');

module.exports=async(req,res)=>{
    try{
        
        
         let category=new categoryDocument({
             productId:req.body.product,
             categoryname:req.body.category,
             decription:req.body.description,
         });
        await category.save()
 res.render('add-category');
     
    }catch(err){

    }
}