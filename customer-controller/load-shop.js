const shop_productDocument = require('../modals/shopproductmodal');
module.exports = async(req,res)=>{
    try{
      //  let city = req.body.city;
      //  let state = req.body.state;
       let productId=req.body.p_id;
       let category=[req.body.cat1,req.body.cat2];
   
        
     
      //  city=city.toLowerCase();
      //  state=state.toLowerCase();
     
       await shop_productDocument.find({$and:[{productId},{'sub_category.category_value':category}]}).populate(['shopId']).exec((err,data)=>{
      
         res.send(data);
       })
    }catch(err){
 
    }
}