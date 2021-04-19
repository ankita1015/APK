const shoporderdocument=require('../modals/shopordermodal');

module.exports=async(req,res)=>{
    try{
       let _id=req.body.oid;
       let status=req.body.status
      
       
       var updateorderstatus = await shoporderdocument.updateMany({_id},{
        $set:{status:status}
    })
    if(updateorderstatus.ok == 1){
        res.send(msg);
    }
    }catch(err){
}
}