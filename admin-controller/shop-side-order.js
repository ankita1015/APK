const shop_side_order = require('../modals/shopordermodal');
module.exports=async(req,res)=>{
    try{
        let ord= req.body.ordid

        let shoporder=new shop_side_order({
            orderId:req.body.ordid,
            customerId:req.body.custid,
            shopId:req.body.id,
            productId:req.body.prodid
        })
        await shoporder.save();
        res.send({ord,success:'1'});
    }catch(err){

    }
}