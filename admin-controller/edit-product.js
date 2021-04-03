const productDocument=require('../modals/productsModal');
const categoryDocument=require('../modals/categorymodel');

module.exports=async(req,res,next)=>{
    try{
       
         const product=await productDocument.find({_id:req.query.id})
         const category=await categoryDocument.find({})
         console.log(category);
        res.render('edit-product',{
            product,
            category
        })  
    }catch(err){
console.log(err);
    }
}




