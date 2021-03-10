const shopDocument = require('../modals/shopmodal');
module.exports = async(req,res)=>{
    try{
       let city = req.body.city;
       let state = req.body.state;
       city=city.toLowerCase();
       state=state.toLowerCase();

       await shopDocument.find({$or: [{state:state}, {city:city}]}).exec((err,data)=>{
          res.send(data);
       })
    }catch(err){

    }
}