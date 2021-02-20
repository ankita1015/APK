const adminDocument=require('../modals/adminmodal');
const bcrypt=require('bcryptjs');

module.exports=async(req,res)=>{
    try{
      
        if(req.body.password===req.body.confirm_password){
            const password=await bcrypt.hash(req.body.password,'10');
            console.log(password);
            const admin=new adminDocument({
           email:req.body.email,
           password:password,
         });
            await admin.save();
          res.render('add-admin');
        }else{
            res.render('add-admin',{
                err:'Password not match',
            })
        }
    }catch(err){

    }
}