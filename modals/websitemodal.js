const mongoose=require('mongoose');
require('../db/conn');

const WebfooterSchema=new mongoose.Schema({
links:[{
    type:Object,
    required:true
}],
aboutus:{
    type:String,
    required:true,
},
office:{
    type:String,
    required:true
},
contact:{
    type:Number,
    required:true
},
address:{
    type:String,
    required:true
}

})
const webfooterdocument=new mongoose.model('webfooter',WebfooterSchema);
module.exports=webfooterdocument;