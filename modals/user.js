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
 hash_password:{
    type:String,
    required:true,
    trim:true,
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



// genrate token//
// Userscema.methods.generateAuthoToken=async function(){
//    try{
// const token=jwt.sign({_id:this._id},'mynameiskunjanbarotprogrammer');
// this.tokens=this.tokens.concat({token});
// await this.save();
// return token;
//    }catch(err){
// res.send(err);
//    }
// }
//password hashing//
 


const UserDocument=new mongoose.model('User',Userscema);


module.exports=UserDocument;  

