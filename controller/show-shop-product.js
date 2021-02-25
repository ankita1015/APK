const productDocument=require('../modals/shopproductmodal');
const categoryDocument=require('../modals/categorymodel');

module.exports=async(req,res)=>{
    try{
      let  products=await productDocument.find({}).populate(['shopid','productId','categoryId']).sort({_id:-1}).limit(20);
      let  category=await categoryDocument.find({}).limit(15);
  
      if(products){
       let len=products.length; 
       let i=0;
       let lastproduct=Array();
       while(i<5){
       lastproduct=products[len-1];
       i++;

      }
    //   console.log(category);
         res.status(200).render('index',{
             products,
             lastproduct,
             category
         });
     }
    }catch(err){
console.log(err);
    }


}