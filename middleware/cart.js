const cartDocument=require('../modals/cartmodal');

const cart=async(req,res)=>{
    const cartProducts=await cartDocument.find({'userId':req.user._id}).populate(['userId','productId']).exec((err,data)=>{
       if(data){
         console.log(data);
        res.status(200).render('cart',{
            data,
        })
       }
  
    })
}
module.exports=cart;