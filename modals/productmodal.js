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
    default:'',

},
price:{
    type:Number,
    required:true
},
total_price:{
type:Number,
required:true
},
images:{

    type:String,
    default:''
},
qty:{
    type:Number,
    default:0
},
shopid:{
    type:String,
    required:true
}


});
const productmodal=new mongoose.model('product',productSchema);
module.exports=productmodal;
