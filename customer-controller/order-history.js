const shoporderdocument=require('../modals/shopordermodal');

module.exports=async(req,res)=>{
    try{
      let user=req.user;

      await shoporderdocument.find({$and:[{status:'Complete'},{userId:user._id}]}).populate(['shopId','productId']).exec((err,data)=>{
          
        res.send(data);    

      })
    }catch(err){

    }
}