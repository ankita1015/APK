const mongoose=require('mongoose');
require('../db/conn');

const SubCatgorySchema=new mongoose.Schema({
categoryId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'category'
},
subcategory:{
        
    type:Object,
    default:''
},
standard:{
    type:String,
    required:true
}

});


const subcategoryModal=mongoose.model('sub_category',SubCatgorySchema);



module.exports=subcategoryModal;