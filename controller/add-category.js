const categoryDocument=require('../modals/categorymodel');

module.exports=async(req,res)=>{
    try{
        let id=req.body.id;
         let category=new categoryDocument({
             productId:id,
             catcategoryname:,
             decription:,
         });
    }catch(err){

    }
}