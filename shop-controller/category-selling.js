const shoporderdocument=require('../modals/shopordermodal');

module.exports=async(req,res)=>{

    try{
        let shop=req.shop;
        let _id=shop._id;
        let category=req.body.categoryid
        await shoporderdocument.find({$and:[{shopId:_id},{status:'Deliverd'},{category}]}).populate(['customerId','userId','productId','category']).exec((err,data)=>{
           console.log(data);
            res.send(data);
        })
    }catch(err){

    }
}