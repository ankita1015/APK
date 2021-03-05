const customerDocument=require('../modals/customermodal');

const order=async(req,res,next)=>{
    try{
        const user=req.user;
    
        await customerDocument.find({userId:user._id}).exec((err,data)=>{

        
            
        if(data.length!=0){
     
        req.customer=data;
        next();
        }else{
            res.render('make-order');  
        }
    });
      
    }catch(err){
        res.render('make-order');
  
    }
}

module.exports=order;