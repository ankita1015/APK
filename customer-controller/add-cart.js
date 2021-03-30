const cartDocument=require('../modals/cartmodal');


module.exports=async(req,res,next)=>{
    try{
        const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
      
      
       
    
        let category={category_name:req.body.category_name,
                      category_value:req.body.category_value
                      }
            
  
        let date=new Date().getDate();
        let month=new Date().getMonth();
        let year=new Date().getFullYear('');

        let hours=new Date().getHours();
        let min =new Date().getMinutes();
        let curTime=hours+":"+min;
        let curDate=`${curTime}||${date}/${monthNames[month]}/${year}`;
        
        let cart=new cartDocument({
            productId:req.body.productid,
            userId:req.user._id,
            date:curDate,
            category:req.body.categoryId,
            price:req.body.total_price,
            qty:req.body.qty,
            shopId:req.body.shopId,
            sub_category:category,

        });
        let cartCreated=await cart.save();
       res.send('1');
         
    }catch(err){
 console.log(err);
    }
}