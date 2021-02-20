const mongoose=require('mongoose');
require('../db/conn');


const adminSchema=new mongoose.Schema({
email:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true,
}
});

const Admin=new mongoose.model('admin',adminSchema);

module.exports=Admin;