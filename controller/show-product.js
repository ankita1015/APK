const productDocument=require('../modals/productmodal');
const product = require('./product');

module.exports=async(req,res)=>{
    try{
      let  products=await productDocument.find({}).sort({_id:-1}).limit(20);


     if(products){
       let len=products.length; 
      let i=0;
      let lastproduct=Array();
      while(i<5){
      lastproduct=products[len-1];
      i++;

      }
      
         res.status(200).render('index',{
             products,
             lastproduct
         });
     }
    }catch(err){

    }


}