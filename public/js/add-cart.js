$(document).ready(function(){
   function sum(inputarray){
             
      if (toString.call(inputarray) !== "[object Array]")
         return false;
           
                 var total =  0;
                 for(var i=0;i<inputarray.length;i++)
                   {                  
                     if(isNaN(inputarray[i])){
                     continue;
                      }
                       total += Number(inputarray[i]);
                    }
                  return total;
                 }

    $(document).on('click','#order',function(){
        let price=$(this).data('price')
       
        let table=$(this).parent().parent().parent().parent()
             
        let qty=table.find('#qty').val()
      
        let productid=$('#productid').val();
        let sub_value=cat_value
        let total_price=price*qty
   
       window.location.assign(`/insert-order?id=${productid}&qty=${qty}&price=${total_price}&category_value=${cat_value}`)
      })


       
    function loadProduct(){
    
      let output=" ";
      let catlist=Array();
      
         $.ajax({
            url:'/load-cart-products',
            type:'POST',
            success:function(data){
              data.forEach(e=>{
                    
                 if(!catlist.includes(e.category.categoryname)){
                    catlist.push(e.category.categoryname)
                 }
              })
              
               
              
              if(data.length==0){
                 $('.order-shop-div').html('<div id="cart_error" style="border:1px solid #dddd;padding:10px;text-align:center;background-color:#eee;font-size:15px;">Your Cart Currently empty</div>')
                 return;
              }else{
                
                catlist.forEach(cat=>{
                      output=output.concat(`<h4 style='text-align:center;'>${cat}</h4><hr><table style='margin:auto;' id='shop-order'><tr><th>img</th><th>product Name</th><th>Category</th>`);
                      let c=1
                      let ct=1
                      let Amount=Array()

                       data.forEach(element=>{
                      
                       if(cat==element.category.categoryname){
                           
                             if(element.sub_category.category_name!='kg'){
                              if(c==1){
                                
                               element.sub_category.category_name.forEach(title=>{
                               output=output.concat(`<th>${title}</th>`);
                             
                               })
                               output=output.concat('<th>Qty</th><th>Price(%)</th><th>action</th></tr>');
                               c++; 
                              }
                             }else{
                             
                              if(ct==1){
                                 
                                output=output.concat(`<th>${element.sub_category.category_name}</th>`)
                                output=output.concat('<th>Price(%)</th><th>action</th></tr>');
                                ct++;  
                              }
                                
                               }
                              if(element.sub_category.category_name!='kg'){
                                  output=output.concat(`<tr>
                                  <td style="padding: 0px;">
                                    <img src="${element.productId.images}" alt=""style='width:5rem;height:5rem;'/>
                                  </td>
                                  <td>${element.productId.product}</td>
                                  <td>${element.category.categoryname}`);
                                   element.sub_category.category_value.forEach(value=>{
                                   output=output.concat(`<td>${value}</td>`);
                                  });
                                  output=output.concat(`
                                  <td><input type='number' id='qty' class='form-control' value='${element.qty}' style='width:5rem;'></td>
                                  <td data-price='${element.price}' class='pricetd'>${element.price}</td>
                                  <td style="width:5rem;">
                                  <a   href='#' id="remove-cart" data-id=${element._id} style='background-color:red;'><i class='fa fa-trash'></i></a>
                                  <a   href="#" style='background-color:green;' id='order' >Order</a></td>

                                   </tr>`);
                                   Amount.push(element.price)
                              }else{
                                 output=output.concat(`<tr>
                                  <td style="padding: 0px;">
                                    <img src="${element.productId.images}" alt=""style='width:5rem;height:5rem;'/>
                                  </td>
                                  <td>${element.productId.product}</td>
                                  <td>${element.category.categoryname}
                                  
                                  <td><input type='number' id='qty' class='form-control'  value='${element.sub_category.category_value}' style='width:5rem;'></td>
                                  
                                   <td data-price='${element.price}' class='pricetd'>${element.price}</td>
                                  <td style="width:5rem;">
                                  <a   href='#' id="remove-cart" data-id=${element._id} style='background-color:red;'><i class='fa fa-trash'></i></a>
                                  <a   href="#" style='background-color:green;' id='order' data-price='${element.price}' >Order</a></td>

                                   </tr>`);
                                   Amount.push(element.price)

                              }
                  
                             }
                            
                               
                          });   
                      
                      output=output.concat(`<tr id='lstchd'></td><td colspan='8' style='text-align:right;' id='totalAmount'><b>Total Amount:-</b>${sum(Amount)}</td></tr></table>
                                          <a href='#'
                                          style='padding:1rem;float:right;color:white;
                                          background-color:green;margin-top:10px;
                                          border-radius:3px;'>Check Out</a><br>`);
                     });
                 
              
                

                   $('.order-shop-div').html(output);
            }
         
        }         
    })

}
    loadProduct();
      
          
  
     $(document).on('click','#remove-cart',function(){
            let id=$(this).data('id');
            
           $.ajax({
                 url:'/delete-cart-product',
                 type:'POST',
                 data:{id},
                 success:function(data){
                window.location.assign('/cart')
                }
             })
        
        });
        $('#order-msg').click(function(){
          $(this).hide();
        });
       let tdprice 
      
    $(document).on('keyup','#qty',function(){
          let price=$(this).parent().next().data('price')
          let input=$(this).val();
          if(input<=0){
             return;
          }
          let totalprice=price*input;
          $(this).parent().next().text(totalprice)
          let table=$(this).parent().parent().parent().parent()
        
          
           tdprice=table.find('.pricetd')
           let total=0
          for(let i=0;i<tdprice.length;i++){
             
           total=total+ Math.floor(tdprice[i].innerText)
         }
           table.find('#lstchd').html(`<td colspan='8' style='text-align:right;' id='totalAmount'><b>Total Amount:-</b>${total}</td>`)

    })

        


});