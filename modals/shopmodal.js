const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
require('../db/conn');



const Shopschema=new mongoose.Schema({
    shopname:{
        type:String,
        required:true,
    },
    state:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    address2:{
        type:String,
        required:true,
    },
    area_code:{
        type:String,
        required:true,
    },
    mobileNo:{
       type:String,
       required:true,
  
    },
   userID:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
  },
 
  });



  
  const ShopDocument=new mongoose.model('Shop',Shopschema);
  module.exports=ShopDocument;