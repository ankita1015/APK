const sub_category_document=require('../modals/sub-categorymodal')

module.exports=async(req,res)=>{
    try{
      let _id=req.body.id;
      let action=req.body.action;
      if(action=='load'){
      await sub_category_document.find({categoryId:_id}).populate(['categoryId']).exec((err,data)=>{
          res.send(data);
        
        
      })
    }else {
      await sub_category_document.find({_id}).populate(['categoryId']).exec((err,data)=>{
        res.send(data);
        
      
    })
    }
    }catch(err){

    }
}