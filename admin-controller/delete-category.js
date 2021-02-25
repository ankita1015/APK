const categoryDocument=require('../modals/categorymodel');

module.exports=async(req,res)=>{
    try{
       const _id=req.body.id;
     const deletedcategory= await categoryDocument.deleteOne({_id});
     res.send(true);
    }catch(err){

    }
}