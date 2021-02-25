const adminDocument=require('../modals/adminmodal');
const bcrypt=require('bcryptjs');

module.exports=async(req,res)=>{
    try{
      
       let adminemail=await adminDocument.find({email:req.body.email});
       if(adminemail===null){
           res.render('admin-login');
       }else{
        
        let ismatch=await bcrypt.compare(req.body.password,adminemail[0].password);
          if(ismatch){
              res.cookie('admin',adminemail[0]._id,{
                 httpOnly:true, 
              })
            res.render('admin-index');
          } 
    }
    }catch(err){
console.log(err);
    }

}