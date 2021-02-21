const adminDocument=require('../modals/adminmodal');


const adminauth=async(req,res,next)=>{
    try{
        let admin_id=req.cookies.admin;
       
        if(admin_id==undefined||admin_id==null){
            res.render('admin-login');
        }else{
        const admin=await adminDocument.find({_id:admin_id});
        console.log()
         req.admin=admin;
         next();
        }
    }catch(err){
     res.render('admin-login');
    
    }
}

module.exports=adminauth;