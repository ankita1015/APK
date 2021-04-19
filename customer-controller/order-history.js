const shoporderdocument=require('../modals/shopordermodal');

module.exports=async(req,res)=>{
    try{
      let user=req.user;

      await shoporderdocument.find({$and:[{status:'Deliverd'},{userId:user._id}]})
      .sort({date_time:1})
      .populate(['shopId','productId','category'])
      .exec((err,data)=>{
          
        res.send(data);    

      })
    }catch(err){

    }
}