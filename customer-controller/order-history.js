const shoporderdocument=require('../modals/shopordermodal');

module.exports=async(req,res)=>{
    try{
      let user=req.user;

      await shoporderdocument.find({$and:[{status:'Complete'},{userId:user._id}]})
      .sort({date_time:1})
      .populate(['shopId','productId'])
      .exec((err,data)=>{
          console.log(data);
        res.send(data);    

      })
    }catch(err){

    }
}