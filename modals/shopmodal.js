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
        required:true
    },
    area_code:{
        type:String,
        required:true,
    },
    mobileNo:{
       type:String,
       required:true,
  
    },
    email:{
        type:String,
        required:true,
  },
  website:{
  type:String,
  default:''
  
  },
  userID:{
      type:String,
       required:true,
  }
  });
  
  const ShopDocument=new mongoose.model('Shop',Shopschema);
  module.exports=ShopDocument;