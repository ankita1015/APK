const shopproductDocument=require('../modals/shopproductmodal');
const customerDocument=require('../modals/customermodal');

module.exports=async(req,res)=>{
    try{
        let cartid=req.query.cart_id;
        let id=req.query.id;
        let qty=req.query.qty
        let price=req.query.price;
         let uid=req.user;
        

        await shopproductDocument.find({productId:id}).populate(['productId']).exec(async(err,product)=>{
                  await customerDocument.find({userId:uid._id}).exec((err,customerData)=>{
                       console.log(product);
                    res.render('confirm-order',{
                        customerData,
                        product,
                        qty,
                        price,
                        cartid
                        
                        
                    })
                })
              
           
        })
    }catch(err){
        console.log(err);
    }
}