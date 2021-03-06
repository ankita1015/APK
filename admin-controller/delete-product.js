const productDocument=require('../modals/productsModal');
const path=require('path');
const fs=require('fs');
module.exports=async(req,res)=>{
    try{
        let id=req.body.id;
    
        const product=await productDocument.find({_id:id}).exec(async(err,data)=>{
          
            await productDocument.deleteOne({_id:id});
             
            res.send('1'); 
            data[0].images.forEach(element=>{
     
            
                fs.unlinkSync(`./public${element}`);
               })
               
        });
    
      
    }catch(err){

    }
}