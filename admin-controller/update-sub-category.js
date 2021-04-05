const subcategoryDocument=require('../modals/sub-categorymodal');

module.exports=async(req,res)=>{
    try{
   
   const _id=req.body.category_id

   const category={category_name:req.body.category_name,category_value:req.body.category_value}
   
   const standard=req.body.standard
      await subcategoryDocument.updateMany({_id},{
          $set:{
              subcategory:category,
              standard
          }
      }).then((result)=>{
          res.render('add-sub-category');
      })
    }catch(err){

    }
}