const orderDocument = require('../modals/ordermodal');
module.exports = async(req,res)=>{
    try{
         await orderDocument.find({}).populate(['productId','userId','customerId']).exec((err,data)=>{
             res.send(data);
         })
    }catch(err){
          //console.log(err);
    }
}