const orderDocment=require('../modals/ordermodal');

module.exports=async(req,res)=>{
    try{

      
      let productId=req.body.product_id;
      let customerId=req.body.customer_id;
      let qty=req.body.qty;
      let pclass=req.body.pclass;
      let category=req.body.category;
      let user_id=req.user;
        
  console.log(productId);
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
          productId,
          qty,
          category,
          pclass,
          userId:user_id._id,
          payment:'process',
          date_time:curDate,
          customerId,
       
        });
        let orderDoc=await orders.save();
    
         req.order=orders;
         console.log(orderDoc);
          res.send('1');


    }catch(err){

    }
}