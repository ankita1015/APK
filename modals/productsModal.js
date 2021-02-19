const mongoose=require('mongoose');
require('../db/conn');

const productSchema=new mongoose.Schema({

productname:{
    type:String,
    required:true,
    unique:true
}



});
const productmodal=new mongoose.model('product',productSchema);
module.exports=productmodal;
