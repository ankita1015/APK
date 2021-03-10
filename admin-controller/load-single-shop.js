const shopDocument = require('../modals/shopmodal');
const orderDocument = require('../modals/ordermodal');

module.exports = async(req,res)=>{
    try{
        let _id=req.body.id;
        let ordid=req.body.orderdata;

       await shopDocument.find({_id}).exec(async(err,data)=>{
        await orderDocument.find({_id:ordid}).populate(['productId']).exec((err,ordata)=>{
            res.send([data,ordata]);
        }) 
       })
    }catch(err){

    }
}