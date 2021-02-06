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
      type:String,
       required:true,
  },
  tokens:[{
      token:{
          type:String,
          required:true
      }
  }]
  });


Shopschema.methods.generateAuthoToken=async function(){
    try{
    const token=jwt.sign({_id:this._id},'mynameiskunjanbarotprogrammer');
    this.tokens=this.tokens.concat({token});
    await this.save();
    return token;
}catch(err){
   res.send(err);
 }
}
  
  const ShopDocument=new mongoose.model('Shop',Shopschema);
  module.exports=ShopDocument;