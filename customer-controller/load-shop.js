const shop_productDocument = require('../modals/shopproductmodal');
module.exports = async(req,res)=>{
    try{
    
        let args=req.body.obj
            args=JSON.parse(args);
          
            
        if(args.length==1){
           await shop_productDocument.find({productId:args[0]}).populate(['shopId']).exec((err,data)=>{
                 res.send(data);
          })  

        }else{
          category=[req.body.args[1],req.body.args[2]]
          console.log(category)
                await shop_productDocument.find({$and:[{productId:args[0]},{'sub_category.category_value':category}]}).populate(['shopId']).exec((err,data)=>{
                res.send(data);
           })  

        }
      
    }catch(err){
 
    }
}