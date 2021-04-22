const shoporderdocument=require('../modals/shopordermodal')
const fs = require("fs");
const path=require('path')
const InvoiceGenerator = require('./invoice')


module.exports=async(req,res)=>{
    try{
      let date=req.body.date;
      let shopId=req.body.shop
      let userId=req.body.userId
   
 
      await shoporderdocument
                .find({$and:[{date_time:date},{shopId:shopId},{userId}]})
                .populate(['shopId','customerId','userId','productId','category'])
                .exec((err,data)=>{
                  let totalAmount=0
                  let ordrerData=Array()
                  let address=data[0].shopId.address.split(',')
                  let newadd=''
                      address.forEach(add=>{
                         newadd+=add+'\n';
                      })
                  
   
                       

          
                  data.forEach(ele =>{
                    let order={
               
                      description:ele.productId.product,
                      quantity:ele.qty,
          
                      amount:ele.price,
                      date:ele.date_time
                  }
                  totalAmount=totalAmount+Math.floor(ele.price);
                  ordrerData.push(order)
               });
              
                const invoiceData = {
                    addresses: {
                        shipping: {
                            name: data[0].userId.name,
                            address: data[0].customerId.Address,
                            city: data[0].customerId.city,
                            state: data[0].customerId.state,
                            postalCode:data[0].customerId.area_code
                        },
                        billing: {
                          name: data[0].userId.name,
                          address: data[0].customerId.Address,
                          city: data[0].customerId.city,
                          state: data[0].customerId.state,
                          postalCode:data[0].customerId.area_code
                        }
                    },
                    items: ordrerData,
                    
                    subtotal:totalAmount ,
                    paid: 0,
                    invoiceNumber: 1234,
                    dueDate: data[0].date_time,
                    shopname:data[0].shopId.shopname,
                    shopaddress:newadd,
                    shopcity:data[0].shopId.city,
                    shopstate:data[0].shopId.state,
                    shopmobile:data[0].shopId.mobileNo,
                    shopcode:data[0].shopId.area_code
                  }
                  const ig = new InvoiceGenerator(invoiceData)
                          let filename=ig.generate()
                          let currpath=path.join(__dirname,'../',filename)
                        
                           let newpath=path.join(__dirname,'../public/bills/',filename)
                                                        
                           fs.rename(currpath,newpath,(err)=>{
                           if(err){
                            throw err
                          }
                           })
                          
                          res.send(newpath)
                           
                })

       
    }catch(er){

    }
}