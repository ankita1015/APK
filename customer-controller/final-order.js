const shoporderDocment=require('../modals/shopordermodal');
const cart=require('../modals/cartmodal')

module.exports=async(req,res)=>{
    try{
     
      const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    
      let date=new Date().getDate();
      let month=new Date().getMonth();
      let year=new Date().getFullYear('');

     
      let curDate=`${year}/${monthNames[month]}/${date}`;
  
       if(req.body.tn==1){
         let products=req.body.products
           for(let i=0;i<products.length;i++){
             let carts=JSON.parse(req.body.carts)

             let category_name=JSON.parse(req.body.category_name)
             let category_value=JSON.parse(req.body.category_value)
               category_name=category_name[i].split(',')
               category_value=category_value[i].split(',')
         
             let product_id=JSON.parse(req.body.products)
               product_id=product_id[i]
        
             let category={category_name:category_name,
                 category_value:category_value}
             let qty=JSON.parse(req.body.qtys)
                 qty=qty[i]
                
             let user_id=req.user;
             let categoryid=JSON.parse(req.body.categorys)
                 categoryid=categoryid[i]
             let shopId=JSON.parse(req.body.shops)
                 shopId=shopId[i]
             let total_price=JSON.parse(req.body.prices)
                 total_price=total_price[i]
                 total_price=total_price.replace('Rs.','')
               
              let customerId= req.customer;
                 customerId=customerId[0]._id


              const orders=new shoporderDocment({
                 productId:product_id,
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
              let removecart=await cart.deleteMany({_id:carts[i]});
            }
            
           
           
       
              
             
             
              
           
          
              
          res.send('1')
            
       }else{
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
        
          

      }
    }catch(err){
console.log(err)
    }
}