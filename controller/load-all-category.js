const productDocument=require('../modals/productsModal');

module.exports=async(req,res)=>{
  try{
const categorys=await productDocument.find().exec((err,data)=>{
    
    res.send(data);
});
  }catch(err){

  }
}