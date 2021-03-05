
const customerDocument=require('../modals/customermodal');

module.exports=async(req,res)=>{
    try{
       
        const customer=new customerDocument({
            userId:req.user._id,
            Address:req.body.address,
            city:req.body.city,
            state:req.body.state,
            area_code:req.body.code,
            mobile_no:req.body.mobileNo,
        });
        const inserted=await customer.save();
        req.customer=customer;  
        res.status(200).render('order');
    }catch(err){

    }
}
