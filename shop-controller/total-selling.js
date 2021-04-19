const shoporderdocument=require('../modals/shopordermodal');

module.exports=async(req,res)=>{

    try{
        let shop=req.shop;
        let _id=shop._id;
        await shoporderdocument.find({$and:[{shopId:_id},{status:'Deliverd'}]}).populate(['customerId','userId','productId','category']).exec((err,data)=>{
           res.send(data);
        })
    }catch(err){

    }
}