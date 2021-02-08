const mongoose=require('mongoose');
require('../db/conn');

const productSchema=new mongoose.Schema({
productname:{
    type:String,
    required:true
},
batchid:{
    type:String,
    required:true
},
description:{
    type:String,
    required:true
},
gst:{
    type:Number,
    required:true
},
price:{
    type:Number,
    required:true
},
total_price:{
type:Number,
required:true
},
images:[{

    type:Array,
    default:''
}],
shopid:{
    type:String,
    required:true
}


});
const productmodal=new mongoose.model('product',productSchema);
module.exports=productmodal;