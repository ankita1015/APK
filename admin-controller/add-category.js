const categorydocumnet = require('../modals/categorymodel');
module.exports = async(req,res)=>{
    try{
        console.log(req.body);
     let category = new categorydocumnet({
        categoryname:req.body.category
     }) 
     await category.save()
     res.render('add-category');
    }catch(err){

    }
}
