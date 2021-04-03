const categorydocumnet = require('../modals/categorymodel');
module.exports = async(req,res)=>{
    try{
        await categorydocumnet.find({categoryname:req.body.category}).exec(async(err,data)=>{
            if(data.length==0){
                let category = new categorydocumnet({
                    categoryname:req.body.category
                 }) 
                 await category.save()
                 res.send(true);
            }
            else{
                res.send(false);
            }
        })
         
    }catch(err){

    }
}
