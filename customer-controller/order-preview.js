const productDocument=require('../modals/productsModal');
const customerDocument=require('../modals/customermodal');

module.exports=async(req,res)=>{
    try{
        let id=req.query.id;
         let uid=req.user;
        //  console.log(uid)
        await productDocument.find({_id:id}).exec(async(err,product)=>{
                  await customerDocument.find({userId:uid._id}).exec((err,customerData)=>{
console.log(product);
                    res.render('order',{
                        customerData,
                        product,
                    })
                })
              
           
        })
    }catch(err){
        console.log(err);
    }
}