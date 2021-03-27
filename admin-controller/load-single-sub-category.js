const sub_category_document=require('../modals/sub-categorymodal');
module.exports=async(req,res)=>{
    try{ 
        let _id=req.body.id;
        await sub_category_document.find({categoryId:_id}).exec((err,data)=>{
            res.send(data);
        })

    }catch(err){

    }
}