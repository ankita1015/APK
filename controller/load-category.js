const categoryDocument=require('../modals/categorymodel');

module.exports=async(req,res)=>{
try{
    let id=req.body.id;
    const category=await categoryDocument.find({_id:id});

}catch(err){

}
}
