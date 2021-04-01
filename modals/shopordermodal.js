const mongoose=require('mongoose');
require('../db/conn');
const shopOrderSchema=new mongoose.Schema({
    customerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Customer',
    },
    shopId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Shop',
    },
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'product',
    },
    date_time:{
        type:String,
        required:true
    },
    qty:{
        type:String,
        required:true,
    },
    payment:{
        type:String,
        required:true,
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'category'
    },
   sub_category:{
        type:Object,
        required:true
    },
    price:{
        type:String,
        required:true
    },
  
    userId:{
       type:mongoose.Schema.Types.ObjectId,
       ref:'User'
    },
    status:{
        type:String,
        required:true
    }


})

const shopOrdermodal=new mongoose.model('shoporder',shopOrderSchema);

module.exports=shopOrdermodal;