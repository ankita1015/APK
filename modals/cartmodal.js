const mongoose=require('mongoose');
require('../db/conn');



const cartSchema=new mongoose.Schema({
productId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'shop-product'
},
categoryId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'category'
},
userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
},
date:{
    type:String,
    required:true
}
});

const Cartmodal=new mongoose.model('Cart',cartSchema);

module.exports=Cartmodal;