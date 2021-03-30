const productDocument=require('../modals/productsModal');
module.exports=async(req,res)=>{
    try{
        let _id=req.query.product_id;


const product=await productDocument.find({_id}).populate(['category']).exec((err,data)=>{
     
       
     
    res.render('single',{
        data,
        
    })
});

    }catch(err){

    }
}