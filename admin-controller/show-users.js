const usersdocument=require('../modals/user');

module.exports=async(req,res)=>{
    try{
      const users=await usersdocument.find().select({tokens:0}).exec((err,data)=>{
          res.send(data);
      })
    }catch(err){

    }
} 