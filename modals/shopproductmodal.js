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
shopId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Shop',
}



});
const productmodal=new mongoose.model('shop_product',productSchema);
module.exports=productmodal;
