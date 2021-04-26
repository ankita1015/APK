
const categorydocument=require('../modals/categorymodel')
const productDocument=require('../modals/productsModal');
const sliderdocument = require('../modals/slidermodal');

module.exports=async(req,res)=>{
    try{
      
    await productDocument.find({}).limit(15);
      await productDocument.find({}).sort({product:-1}).exec(async(err,products)=>{
          await categorydocument.find({}).limit(15).exec(async(err,uniqueProduct)=>{
            await sliderdocument.find({}).exec((err,sliderimg)=>{
            console.log(sliderimg);
              res.status(200).render('index',{
                products,
                uniqueProduct,
                sliderimg,
               
              });
            })
          })
      })
        

    }catch(err){
console.log(err);
    }


}