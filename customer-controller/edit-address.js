const customerDocument=require('../modals/customermodal');

module.exports=async(req,res)=>{
    try{
const _id=req.body.customer_id;
const address=req.body.address;

  let updated=await customerDocument.updateMany({_id},{
   $set:{Address:address},
    })
    if(updated.ok=='1'){
        res.send('1');
    }
    }catch(err){

    }
}