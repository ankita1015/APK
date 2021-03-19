const shoporderDocument = require('../modals/shopordermodal');
module.exports=async(req,res)=>{
    try{
         let _id = req.query.id;
         await shoporderDocument.find({_id}).populate(['productId','customerId','userId']).exec((err,data)=>{
             
            res.render('order-details',{data});
         })
    }catch(err){

    }
}