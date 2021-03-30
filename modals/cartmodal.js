const mongoose=require('mongoose');
require('../db/conn');



const cartSchema=new mongoose.Schema({
productId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'product'
},
category:{
   type:mongoose.Schema.Types.ObjectId,
   ref:'category'
},
sub_category:{
    type:Object,
    required:true
},
userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
},
date:{
    type:String,
    required:true
},
shopId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Shop',
},
qty:{
type:Number,
default:0
},
price:{
   type:Number,
   required:true,
},
gst:{
    type:Number,
    default:0
}

});

const Cartmodal=new mongoose.model('Cart',cartSchema);

module.exports=Cartmodal;