const mongoose=require('mongoose');
require('../db/conn');

const WebfooterSchema=new mongoose.Schema({

})
const webfooterdocument=new mongoose.model('webfooter',WebfooterSchema);
module.exports=webfooterdocument;