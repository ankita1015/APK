
const shopProductDocument=require('../modals/shopproductmodal');

module.exports=async (req,res)=>{
    try{
     let _id =req.body.id;
     let qty= req.body.qty;
    
     let updated=await shopProductDocument.updateMany({_id},{
        $inc:{ qty:qty }
     })
     res.send(true);
    }catch(err){

    }
}
