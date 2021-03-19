const shoporderDocment=require('../modals/shopordermodal');
const cart=require('../modals/cartmodal')

module.exports=async(req,res)=>{
    try{

      
      let productId=req.body.product_id;
      let customerId=req.body.customer_id;
      let qty=req.body.qty;
      let pclass=req.body.pclass;
      let category=req.body.category;
      let user_id=req.user;
      let cart_id=req.body.cart_id;
      let shopId=req.body.shopid;
 console.log(shopId)
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
  
        const orders=new shoporderDocment({
          productId,
          qty,
          category,
          pclass,
          userId:user_id._id,
          payment:'Process',
          date_time:curDate,
          customerId,
          shopId,
          status:'Process'
       
        });
        let orderDoc=await orders.save();
        let removecart=await cart.deleteMany({_id:cart_id});
    
         req.order=orders;
      
          res.send('1');


    }catch(err){

    }
}