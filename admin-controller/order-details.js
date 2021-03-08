const orderDocument = require('../modals/ordermodal');
module.exports=async(req,res)=>{
    try{
         let _id = req.query.id;
         await orderDocument.find({_id}).populate(['productId','customerId','userId']).exec((err,data)=>{
             
            res.render('order-details',{data});
         })
    }catch(err){

    }
}