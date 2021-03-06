const mongoose=require('mongoose');
require('../db/conn');

const orderSchema=new mongoose.Schema({
productId:{
  type:mongoose.Schema.Types.ObjectId,
  ref:'product',
},
qty:{
    type:Number,     
    default:1,
},
category:{
    type:String,
    required:true
},
pclass:{
    type:String,
    required:true
},
userId:{
   type:mongoose.Schema.Types.ObjectId,
   ref:'User'
},
payment:{
    type:String,
    required:true,
},
date_time:{
    type:String,
    required:true
},
customerId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Customer'
},

});

const Ordermodal=new mongoose.model('Order',orderSchema);

module.exports=Ordermodal;