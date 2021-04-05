const mongoose=require('mongoose');
require('../db/conn');

const sliderSchema=new mongoose.Schema({
    img:[{
        type:String,
        required:true
        
    }]

})
const sliderdocument=mongoose.model('slider',sliderSchema);
module.exports=sliderdocument;