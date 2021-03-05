const orderDocment=require('../modals/ordermodal');

module.exports=async(req,res)=>{
    try{

        let id=req.query.id;
        let cus_id=req.customer;
        let user_id=req.user;
        console.log(id);
        console.log(cus_id);
        console.log(user_id);
  
        const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
      
        let date=new Date().getDate();
        let month=new Date().getMonth();
        let year=new Date().getFullYear('');

        let hours=new Date().getHours();
        let min =new Date().getMinutes();
        let curTime=hours+":"+min;
        let curDate=`${curTime}||${date}/${monthNames[month]}/${year}`;
  
        const orders=new orderDocment({
          productId:id,
          userId:user_id._id,
          payment:'process',
          date_time:curDate,
          customerId:cus_id[0]._id,
       
        });
        let orderDoc=await orders.save();
    
         req.order=orders;
        res.render('cart',{
          msg:'You have been Ordered....',
        });

    }catch(err){
console.log(err);
    }
}