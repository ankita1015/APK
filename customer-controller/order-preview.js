const productDocument=require('../modals/productsModal');
const customerDocument=require('../modals/customermodal');

module.exports=async(req,res)=>{
    try{
        let id=req.query.id;
         let uid=req.user;
        let cart_id=req.query.cart_id;

        await productDocument.find({_id:id}).exec(async(err,product)=>{
                  await customerDocument.find({userId:uid._id}).exec((err,customerData)=>{

                    res.render('confirm-order',{
                        customerData,
                        product,
                        cart_id
                    })
                })
              
           
        })
    }catch(err){
        console.log(err);
    }
}