const shoporderdocument=require('../modals/shopordermodal');

module.exports=async(req,res)=>{
    try{
      await shoporderdocument.find({status:'Complete'}).populate(['shopId','productId']).exec((err,data)=>{
           res.send(data);          
      })
    }catch(err){

    }
}