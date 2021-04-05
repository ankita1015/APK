const sliderdocument = require('../modals/slidermodal');


module.exports=async(req,res)=>{
    try{
       await sliderdocument.find({}).exec((err,data)=>{
           res.send(data);
       })
    }catch(err){

    }

}