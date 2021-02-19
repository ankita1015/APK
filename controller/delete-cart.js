const cartDocument=require('../modals/cartmodal');

module.exports=async(req,res)=>{
    try{
    let id=req.body.id;
    let removCart=await cartDocument.deleteOne({_id:id});
     if(removCart){
      res.send('1');
    }
    }catch(err){
console.log(err);
    }
}