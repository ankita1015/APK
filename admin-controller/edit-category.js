const categoryDocument=require('../modals/categorymodel');

module.exports=async(req,res)=>{
    try{
        const _id=req.query.id;
     const category=await categoryDocument.find({_id});
     res.render('edit-category',{
         category,
     });
    }catch(err){

    }
}