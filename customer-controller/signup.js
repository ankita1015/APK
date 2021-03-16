const UserDocument=require('../modals/user');
const bcrypt=require('bcryptjs');
module.exports=async(req,res)=>{
    try{
        if(req.body.password===req.body.cpassword){
            let password=await bcrypt.hash(req.body.password,10);
          
            const User=new UserDocument({
                    name:req.body.name,
                    email:req.body.email,
                    password,
                    role:req.body.role,
                   });
                const token =await User.generateAuthoToken();
                if(User.role=='0'){
                res.cookie('user',token,{
                   httponly:true
                });
            }else{
                res.cookie('shopuser',token,{
                    httponly:true
                 });
                }
            const registred=await User.save();   
           if(req.body.role==1){
               res.send('1');
           }else{
            res.status(200).render('index');
           }
         }else{
             res.render('signup',{
                 error:"Password Doesn't match",
            });
        }
    
              
    }catch(err){
    res.status(500).send(err);
    }

}