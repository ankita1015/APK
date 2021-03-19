const shoporderDocment=require('../modals/shopordermodal');

module.exports=async(req,res)=>{
    try{
        let _id=req.body.id;
     const deltetedorder=await shoporderDocment.deleteOne({_id});
     res.send('1');
    }catch(err){

    }
}