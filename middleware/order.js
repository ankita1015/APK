const customerDocument=require('../modals/customermodal');

const order=async(req,res,next)=>{
    try{
        const user=req.user;
        //console.log(req.user)
        const customer=await customerDocument.find({userId:user._id});
 
        req.customer=customer;

        next();
    }catch(err){
     res.render('make-order');
    }
}

module.exports=order;