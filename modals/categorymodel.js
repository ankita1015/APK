const mongoose=require('mongoose');
require('../db/conn');

const catgorySchema=new mongoose.Schema({
productname:{
    type:String,
    required:true,
},    
category:{
    type:String,
    required:true
}

});


const categoryModal=mongoose.model('category',catgorySchema);



module.exports=categoryModal;