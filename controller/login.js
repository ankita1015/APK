const UserDocument=require('../modals/user');
const bcrypt=require('bcryptjs');
module.exports=async(req,res)=>{
    try{
        console.log(req.body.email);
        const userEmail=await UserDocument.findOne({email:req.body.email});
        if(userEmail===null){
          
        }else{
            
            const isMatch=await bcrypt.compare(req.body.pass,10);
 
            const token =await userEmail.generateAuthoToken();
            res.cookie('user',token,{
                secure:true,
                httpOnly:true,
                
            });
            if(isMatch==userEmail.password){
               
             if(userEmail.role==0){
                res.status(200).render('ourorders');
            }else if(userEmail.role==1){
            res.status(200).render('index');
            }
        }else{
            res.status(500).render('login',{
                error_pasword:'Password Does not match',
               });

        }
        }

    }catch(err){
console.log(err);
    }
}