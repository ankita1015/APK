const cartDocument=require('../modals/cartmodal');

module.exports=async(req,res)=>{
    const cartProducts=await cartDocument.find({'userId':req.user._id}).populate(['userId','productId']).exec((err,data)=>{
      
        if(data){
        let records=data.length
        
        res.send(records.toString());
    
       }else{
        res.send('0')
       }
  
    })
}
