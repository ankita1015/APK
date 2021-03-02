
const productDocument=require('../modals/productsModal');

module.exports=async(req,res)=>{
    try{
      
      let  products=await productDocument.find({}).limit(15);
  
      if(products){
          
    
      
  
    
         res.status(200).render('index',{
             products,
             
            
         });
     }
    

    }catch(err){
console.log(err);
    }


}