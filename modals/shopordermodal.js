const mongoose=require('mongoose');
require('../db/conn');
const shopOrderSchema=new mongoose.Schema({
    orderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Order',
    },
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
    }


})

const shopOrdermodal=new mongoose.model('shoporder',shopOrderSchema);

module.exports=shopOrdermodal;