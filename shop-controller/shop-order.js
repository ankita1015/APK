const shoporderdocument=require('../modals/shopordermodal');

module.exports=async(req,res)=>{
    try{
         let shop=req.shop;
         let shopId=shop._id;
         await shoporderdocument.find({$and:[{shopId},{status:{$ne:'Deliverd'}}]}).populate(['customerId','productId','userId']).exec((err,data)=>{
         
             res.send(data);
         })
    }catch(err){
         
    }
}