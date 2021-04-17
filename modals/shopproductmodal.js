const { text } = require('body-parser');
const mongoose=require('mongoose');
require('../db/conn');

const productSchema=new mongoose.Schema({

batchid:{
    type:String,
    required:true
},


productId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'product',
  
},
category:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'category'
},

sub_category:{
    type:Object,
    required:true
},
shopId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Shop',
},
gst:{
    type:Number,
    default:'',

},
qty:{
    type:Number,
    default:0,
},
price:{
    type:Number,
    required:true
},
total_price:{
type:Number,
required:true
},





});
const productmodal=new mongoose.model('shop_product',productSchema);
module.exports=productmodal;
