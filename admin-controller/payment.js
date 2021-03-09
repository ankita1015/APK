const { response } = require('express');
const orderDocument = require('../modals/ordermodal');
module.exports = async(req,res)=>{
    try{
        let _id = req.body.id;
        let msg=req.body.mt;
        console.log(_id);
        console.log(msg);
         var updatePayment = await orderDocument.updateMany({_id},{
             $set:{payment:msg}
         })
         if(updatePayment.ok == 1){
             res.send(msg);
         }
    }catch(err){
          //console.log(err);
    }
}