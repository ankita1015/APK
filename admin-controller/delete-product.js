const productDocument=require('../modals/productsModal');
const path=require('path');
const fs=require('fs');
module.exports=async(req,res)=>{
    try{
        let id=req.body.id;
        let pt= path.join(__dirname,'./public');
        const product=await productDocument.find({_id:id}).exec((err,data)=>{
            // console.log(data);
            data[0].images.forEach(element=>{
                pt=pt.replace('\\','/');
                console.log(pt);
                fs.unlinkSync(`${element}`)

            })
        });
        // const removed= await productDocument.deleteOne({_id:id});
       
        if(removed){
         res.send('1');  
        }
    }catch(err){

    }
}