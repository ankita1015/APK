const subcategoryDocument=require('../modals/sub-categorymodal');

module.exports=async(req,res)=>{
    try{
      let _id=req.body.id;
      await subcategoryDocument.deleteOne({_id})
    }catch(err){

    }
}