const productDocument=require('../modals/productsModal');

module.exports=async(req,res)=>{
    try{
        let id=req.query.id;
        await productDocument.find({_id:id}).exec((err,data)=>{
            
        })
    }catch(err){
        console.log(err);
    }
}