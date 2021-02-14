const mongoose=require('mongoose');
require('../db/conn');

const orderSchema=new mongoose.Schema({
productId:{
    type:String,
    required:true
},
userId:{
   type:String,
   required:true
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
    type:String,
    required:true
}
});

const Ordermodal=new mongoose.model('Order',orderSchema);

module.exports=Ordermodal;