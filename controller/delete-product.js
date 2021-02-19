const productDocument=require('../modals/productsModal');

module.exports=async(req,res)=>{
    try{
        let id=req.body.id;
        const removed= await productDocument.deleteOne({_id:id});
       
        if(removed){
         res.send('1');  
        }
    }catch(err){

    }
}