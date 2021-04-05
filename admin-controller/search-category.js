const categorydocument = require('../modals/categorymodel');

module.exports=async(req,res)=>{
    try{
       var search = req.body.search
       await categorydocument.find({categoryname:{$regex:search}}).exec((err,data)=>{
           res.send(data);
         })
    }catch(err){

    }
}