const categorydocument = require('../modals/categorymodel');
module.exports = async(req,res)=>{
    try{
       const _id = req.body.category_id;
       const categoryname = req.body.category;
       await categorydocument.updateMany({_id},{
           $set:{categoryname}
       }).exec((err,data)=>{
           if(data.ok==1){
               res.render('add-category');
           }
       })
    }catch(err){

    }
}