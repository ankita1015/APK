const mongoose=require('mongoose');
require('../db/conn');



const cartSchema=new mongoose.Schema({
productId:{
    type:String,
    required:true
},
userId:{
    type:String,
    required:true
},
date:{
    type:String,
    required:true
}
});

const Cartmodal=new mongoose.model('Cart',cartSchema);

module.exports=Cartmodal;