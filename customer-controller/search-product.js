const productDocument = require('../modals/productsModal');
module.exports = async(req,res)=>{
      try{
          var search = req.body.searchproduct
         await productDocument.find({product:{$regex:search}}).exec((err,data)=>{
           
            res.send(data);
         })
      }catch(err){

      }
}