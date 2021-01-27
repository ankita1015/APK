const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
require('../db/conn');


const Userscema=new mongoose.Schema({
 name:{
    type:String,
    required:true,
 },
email:{
    type:String,
    required:true,

 },
 password:{
    type:String,
    required:true,
 },
 role:{
    type:String,
    enum:['0','1'],
 }
});
//password hashing//
Userscema.pre('save',async function(next){
this.password=await bcrypt.hash(this.password,10);
next();
})


const UserDocument=new mongoose.model('User',Userscema);
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
  city:{
      type:String,
      required:true,
  },
  address:{
      type:String,
      required:true
  },
  mobileNo:{

  }


});

const ShopDocument=new mongoose.model('Shop',Shopschema);
module.exports=ShopDocument;
module.exports=UserDocument;    

