const mongoose=require('mongoose');
require('../db/conn');

const productSchema=new mongoose.Schema({

product:{
    type:String,
    required:true,
  
},
images:[{

    type:String,
    default:''

}],
description:{
    type:String,
    required:true,
},

category:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'category'
}
});
const productmodal=new mongoose.model('product',productSchema);
module.exports=productmodal;
