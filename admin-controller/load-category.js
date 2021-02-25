const categoryDocument=require('../modals/categorymodel');

module.exports=async(req,res)=>{
try{
    let id=req.body.id;
 
    const category=await categoryDocument.find({productId:id}).populate('productId').exec((err,data)=>{
        
        res.send(data);

    });
  
}catch(err){

}
}
