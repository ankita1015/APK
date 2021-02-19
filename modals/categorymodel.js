const mongoose=require('mongoose');
require('../db/conn');

const catgorySchema=new mongoose.Schema({
productId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'product'
},    
categoryname:{
    type:String,
    required:true
},
decription:{
    type:String,
    required:true

}
});


const categoryModal=mongoose.model('category',catgorySchema);



module.exports=categoryModal;