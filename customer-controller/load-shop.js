const shop_productDocument = require('../modals/shopproductmodal');
module.exports = async(req,res)=>{
    try{
      //  let city = req.body.city;
      //  let state = req.body.state;
       let productId=req.body.p_id;
      //  city=city.toLowerCase();
      //  state=state.toLowerCase();
      console.log(productId);
       await shop_productDocument.find({productId}).populate(['shopId']).exec((err,data)=>{
         console.log(data);
         res.send(data);
       })
    }catch(err){
 
    }
}