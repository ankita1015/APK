const shopproductDocument=require('../modals/shopproductmodal');

module.exports=async(req,res)=>{
    try{
         let shop=req.shop;
          let shopId=shop._id
         await shopproductDocument.find({shopId}).populate(['productId']).exec((err,data)=>{
            console.log(data);
            res.send(data);
            
         })

 
    }catch(err){

    }
}