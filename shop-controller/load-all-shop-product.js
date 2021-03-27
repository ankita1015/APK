const shopproductDocument=require('../modals/shopproductmodal');

module.exports=async(req,res)=>{
    try{
         let shop=req.shop;
          let shopId=shop._id
          let category=req.body.id;
          
         await shopproductDocument.find({$and:[{shopId},{category:category}]}).populate(['productId']).exec((err,data)=>{
          
            res.send(data);
            
         })

 
    }catch(err){

    }
}