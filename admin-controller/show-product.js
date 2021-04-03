
const productDocument=require('../modals/productsModal');

module.exports=async(req,res)=>{
    try{
       
   await productDocument.find().populate(['category']).exec((err,data)=>{

       res.send(data);
    
   });
  


    }catch(err){
console.log(err);
    }
}
