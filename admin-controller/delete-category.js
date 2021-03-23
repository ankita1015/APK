const categorydocument = require('../modals/categorymodel');
module.exports = async(req,res)=>{
    try{
       let _id = req.body.id;
       await categorydocument.deleteOne({_id}).exec((error,data)=>{
          if(data.ok==1){
              res.send('1');
          }
       })
    }catch(err){

    }
}