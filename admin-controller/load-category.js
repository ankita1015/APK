const categorydocumnet=require('../modals/categorymodel');
module.exports = async(req,res)=>{
    try{
     await categorydocumnet.find({}).exec((err,data)=>{
       res.send(data);
       
     })
    }catch(err){

    }
}