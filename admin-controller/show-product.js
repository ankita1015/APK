const productDocument=require('../modals/productsModal');

module.exports=async(req,res)=>{
    try{
       
   const products=await productDocument.find().exec((err,data)=>{
 
       res.send(data);
      
   
   });
  


    }catch(err){
console.log(err);
    }
}
