const UserDocument=require('../modals/user');
const bcrypt=require('bcrypt');
module.exports=async(req,res)=>{
    try{

        const userEmail=await UserDocument.findOne({email:req.body.email});
        if(userEmail===null){
        res.send('email_error');
        }else{
          let ismatch=await bcrypt.compare(req.body.password.toString(),userEmail.password);
          if(ismatch==true){
          
               const token =await userEmail.generateAuthoToken();
               
               res.cookie('user',token,{
                expire: 360000 + Date.now(),
                httponly:true
               
             });
              
              const check=userEmail.role=='0' ? true:false;
              if(check){
               
                res.status(200).render('add-shop');
              }else{
                res.status(200).render('index');
              }
              }else{
              res.status(500).send('password-not-match');
              }
        }

    }catch(err){
      console.log(err);
    }
}