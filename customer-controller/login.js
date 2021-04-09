const UserDocument=require('../modals/user');
const bcrypt=require('bcryptjs');
module.exports=async(req,res)=>{
    try{
      

        const userEmail=await UserDocument.findOne({email:req.body.email});
        if(userEmail===null){
        res.send('email_error');
        }else{
          let ismatch=await bcrypt.compare(req.body.password.toString(),userEmail.password);
          if(ismatch==true){
          
               const token =await userEmail.generateAuthoToken();
                if(userEmail.role=='0'){
               res.cookie('user',token,{
                expire: 360000 + Date.now(),
                httponly:true
               
             });
            }else{
              res.cookie('shopuser',token,{
                expire: 360000 + Date.now(),
                httponly:true
               
             });
            }
              
              const check=userEmail.role=='1' ? true:false;
              if(check){
               
               res.send('1')
              }else{
                res.send('0')
            
              }
              }else{
              res.status(500).send('password-not-match');
              }
        }

    }catch(err){
      console.log(err);
    }
}