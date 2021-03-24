const categorydocument = require('../modals/categorymodel');
module.exports = async(req,res)=>{
    try{

        let _id = req.body.id;
        await categorydocument.find({_id}).exec((error,data)=>{
           res.send(data);
           
        })
    }
    catch(err){
        console.log(err)
    }
}