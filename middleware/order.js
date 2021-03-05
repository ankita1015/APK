
const customerDocument=require('../modals/customermodal');


const order=async(req,res,next)=>{
    try{
        const user=req.user;
        
        const customer=await customerDocument.find({userId:user._id}).exec((err,data)=>{
          
            if(data.length==0 || data==undefined){

                res.render('make-order');
            }else{
                req.customer=data;
              
                next();
            }
        });
       
      
    }catch(err){
        res.render('make-order');
  
    }
}

module.exports=order;