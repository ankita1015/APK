const mongoose=require('mongoose');
require('../db/conn');

const customerSchema=new mongoose.Schema({
 userId:{
 type:mongoose.Schema.Types.ObjectId,
 ref:'User'
 },
 Address:{
     type:String,
     required:true
 },
 city:{
     type:String,
     required:true
 },
 state:{
     type:String,
     required:true,
 },
 area_code:{
     type:Number,
     required:true
 },
 mobile_no:{
     type:Number,
     required:true
 }
});


const Customermodal=new mongoose.model('Customer',customerSchema);

module.exports=Customermodal;