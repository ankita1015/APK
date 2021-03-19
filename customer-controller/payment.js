
const shoporderDocument = require('../modals/shopordermodal');
module.exports = async(req,res)=>{
    try{
        let _id = req.body.id;
        let msg=req.body.msg;
  
         var updatePayment = await shoporderDocument.updateMany({_id},{
             $set:{payment:msg}
         })
         if(updatePayment.ok == 1){
             res.send(msg);
         }
    }catch(err){
          console.log(err);
    }
}