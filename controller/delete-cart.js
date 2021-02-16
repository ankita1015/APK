const cartDocument=require('../modals/cartmodal');

module.exports=async(req,res)=>{
    try{
let id=req.query.id;
console.log(id);
    let removCart=await cartDocument.deleteOne({_id:id});
    if(removCart){
res.status(200).render('cart');
    }
    }catch(err){

    }
}