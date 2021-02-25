const productDocument=require('../modals/productsModal');

module.exports=async(req,res)=>{
    try{
       
   const products=new productDocument({
     productname:req.body.products
   });
  await products.save();
  res.send('1');


    }catch(err){
console.log(err);
    }
}
