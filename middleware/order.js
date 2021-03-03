const customerDocument=require('../modals/customermodal');

const order=async(req,res,next)=>{
    try{
        const user=req.user;
    
        const customer=await customerDocument.find({userId:user._id});
        if(customer!=[]){
     
        req.customer=customer;
        console.log(customer);
        next();
        }else{
            res.render('make-order');  
        }
     
      
    }catch(err){
        res.render('make-order');
  
    }
}

module.exports=order;