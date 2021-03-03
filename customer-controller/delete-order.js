const orderDocment=require('../modals/ordermodal');

module.exports=async(req,res)=>{
    try{
        let _id=req.body.id;
     const deltetedorder=await orderDocment.deleteOne({_id});
     if(deleteProduct){
         res.send('1');
     }
    }catch(err){

    }
}