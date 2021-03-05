
const productDocument=require('../modals/productsModal');

module.exports=async(req,res)=>{
    try{
    //   ttt
      let  products=await productDocument.find({}).limit(15);
        let uniqueProduct =await productDocument.find({}).sort({product:-1})
        
        
      if(products){
          
    
      
  
    
         res.status(200).render('index',{
             products,
             uniqueProduct,
            
         });
     }
    

    }catch(err){
console.log(err);
    }


}