const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
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
 },
 tokens:[{
     token:{
         type:String,
         required:true
     }
 }]
});
//genrate token//
Userscema.methods.generateAuthoToken=async function(){
   try{
const token=jwt.sign({_id:this._id},'mynameiskunjanbarotprogrammer');
this.tokens=this.tokens.concat({token});
await this.save();
return token;
   }catch(err){
res.send(err);
   }
}
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
    // required:true,
}
});

const ShopDocument=new mongoose.model('Shop',Shopschema);

// module.exports=ShopDocument;
// module.exports=UserDocument;  
module.exports={UserDocument,ShopDocument};  

