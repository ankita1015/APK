const productDocument=require('../modals/productmodal');


module.exports=async(req,res)=>{

    const products=await productDocument.find({});

    res.status(200).render('view',{
     products
     })
}