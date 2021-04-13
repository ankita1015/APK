const productDocument=require('../modals/productsModal');
module.exports=async(req,res)=>{
    try{
        let _id=req.query.productid;


const product=await productDocument.find({_id}).populate(['category']).exec((err,data)=>{
     
     
     
        res.render('single',{
            data,
            
        })
});

    }catch(err){

    }
}