const websitefooterDocument=require('../modals/websitemodal');

module.exports=async(req,res)=>{
    try{
     await websitefooterDocument.find().exec((err,data)=>{
         res.send(data)
     })
    }catch(err){

    }

}