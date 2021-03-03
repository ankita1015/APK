const cartDocument=require('../modals/cartmodal');
const url=require('url');

module.exports=async(req,res,next)=>{
    try{
        const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
      
      
        let id=req.query.id;
    
   
  
        let date=new Date().getDate();
        let month=new Date().getMonth();
        let year=new Date().getFullYear('');

        let hours=new Date().getHours();
        let min =new Date().getMinutes();
        let curTime=hours+":"+min;
        let curDate=`${curTime}||${date}/${monthNames[month]}/${year}`;
        
        let cart=new cartDocument({
            productId:id,
            userId:req.user._id,
            date:curDate,

        });
        let cartCreated=await cart.save();
        res.render('cart',{
            
        });
         
    }catch(err){
 console.log(err);
    }
}