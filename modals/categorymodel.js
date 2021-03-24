const mongoose=require('mongoose');
require('../db/conn');

const catgorySchema=new mongoose.Schema({
categoryname:{
    type:String,
    required:true
}

});


const categoryModal=mongoose.model('category',catgorySchema);



module.exports=categoryModal;