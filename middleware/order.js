"use strict"
const customerDocument=require('../modals/customermodal');


const order=async(req,res,next)=>{
    try{
        const user=req.user;
<<<<<<< HEAD
    
        await customerDocument.find({userId:user._id}).exec((err,data)=>{

        
            
        if(data.length!=0){
     
        req.customer=data;
        next();
        }else{
            res.render('make-order');  
        }
    });
=======
        
        const customer=await customerDocument.find({userId:user._id}).exec((err,data)=>{
          
            if(data.length==0 || data==undefined){

                res.render('make-order');
            }else{
                req.customer=data;
              
                next();
            }
        });
       
>>>>>>> d213adf29eb06abf33f7964183e7c838558bc8a6
      
    }catch(err){
        res.render('make-order');
  
    }
}

module.exports=order;