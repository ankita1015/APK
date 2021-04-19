const shoporderdocument=require('../modals/shopordermodal')
const fs = require("fs");
const path=require('path')
const InvoiceGenerator = require('./invoice')


module.exports=async(req,res)=>{
    try{
      let date=req.body.date;
      let shopId=req.body.shop
      let userId=req.body.userId
      console.log(userId)

      await shoporderdocument
                .find({$and:[{date_time:date},{shopId:shopId},{userId}]})
                .populate(['customerId','userId','productId','category'])
                .exec((err,data)=>{
                  console.log(data)
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
                    items: [{
                            itemCode: 12341,
                            description: data[0].productId.product,
                            quantity: data[0].qty,
                            amount:data[0].price
                    },
                    ],
                    subtotal:data[0].price ,
                    paid: 0,
                    invoiceNumber: 1234,
                    dueDate: data[0].date_time
                  }
                  const ig = new InvoiceGenerator(invoiceData)
                          let filename=ig.generate()
                      
                          
                          res.send(filename)
                           
                })



    

     
       
    }catch(er){

    }
}