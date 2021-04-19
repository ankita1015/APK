const shoporderDocment=require('../modals/shopordermodal');
const cart=require('../modals/cartmodal')

module.exports=async(req,res)=>{
    try{

      let cart_id=req.body.cart_id;
      let productId=req.body.product_id;
      let customerId= req.customer;
          customerId=customerId[0]._id
         
         

      let qty=req.body.qty;
      let category={category_name:req.body.category_name,
                    category_value:req.body.category_value} 
      let categoryid=req.body.categoryId;
      let user_id=req.user;
      let total_price=req.body.total_price;
      let shopId=req.body.shopid;
 
        const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
      
        let date=new Date().getDate();
        let month=new Date().getMonth();
        let year=new Date().getFullYear('');

       
        let curDate=`${year}/${monthNames[month]}/${date}`;
        //  console.log(req.body);
        const orders=new shoporderDocment({
          productId:productId,
          qty,
          sub_category:category,
          category:categoryid,
          userId:user_id._id,
          payment:'Process',
          date_time:curDate,
          shopId,
          price:total_price,
          customerId,
          status:'order accept'
       
        });
        let orderDoc=await orders.save();
     
        res.send('1');
        if(cart_id!=null){
        let removecart=await cart.deleteMany({_id:cart_id});
        }
         req.order=orders;
        
          


    }catch(err){

    }
}