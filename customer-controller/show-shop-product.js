const categorydocument=require('../modals/categorymodel')
const productDocument=require('../modals/productsModal');

module.exports=async(req,res)=>{
    try{
 
      let  products=await productDocument.find({}).limit(15);
      await productDocument.find({}).sort({product:-1}).exec(async(err,products)=>{
          await categorydocument.find({}).limit(15).exec((err,uniqueProduct)=>{
            res.status(200).render('index',{
                products,
                uniqueProduct,
               
            });
          })
      })
        

    }catch(err){
console.log(err);
    }


}