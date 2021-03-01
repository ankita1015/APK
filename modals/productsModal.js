const mongoose=require('mongoose');
require('../db/conn');

const productSchema=new mongoose.Schema({

product:{
    type:String,
    required:true,
  
},
product_cat:{
    type:String,
    required:true,
},
images:[{

    type:String,
    default:''

}],
gst:{
    type:Number,
    default:'',

},
price:{
    type:Number,
    required:true
},
total_price:{
type:Number,
required:true
},




});
const productmodal=new mongoose.model('product',productSchema);
module.exports=productmodal;
