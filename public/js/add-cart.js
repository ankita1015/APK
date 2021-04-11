$(document).ready(function(){

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
       var pre_category = ''
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
                c=1;
                catlist.forEach(cat=>{
                      output=output.concat(`<table id='shop-order'><tr><th>img</th><th>product Name</th><th>Category</th>`);
                     data.forEach(element=>{
                       if(cat==element.category.categoryname){
                           
                             if(element.sub_category.category_name!='kg'){
                            
                               element.sub_category.category_name.forEach(title=>{
                               output=output.concat(`<th>${title}</th>`);
                             
                               })
                             output=output.concat('<th>Qty</th><th>Price(%)</th><th>action</th></tr>');
                            
                             }else{
                              if(c==1){
                                output=output.concat(`<th>${element.sub_category.category_name}</th>`)
                                output=output.concat('<th>Price(%)</th><th>action</th></tr>');
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
                                  <td data-price='${element.price}'>${element.price}</td>
                                  <td style="width:5rem;">
                                  <a   href='#' id="remove-cart" data-id=${element._id} style='background-color:red;'><i class='fa fa-trash'></i></a>
                                  <a   href="#" style='background-color:green;' id='order' >Order</a></td>

                                   </tr>`);
                              }else{
                                 output=output.concat(`<tr>
                                  <td style="padding: 0px;">
                                    <img src="${element.productId.images}" alt=""style='width:5rem;height:5rem;'/>
                                  </td>
                                  <td>${element.productId.product}</td>
                                  <td>${element.category.categoryname}
                                  
                                  <td><input type='number' id='qty' class='form-control'  value='${element.sub_category.category_value}' style='width:5rem;'></td>
                                  
                                   <td data-price='${element.price}'>${element.price}</td>
                                  <td style="width:5rem;">
                                  <a   href='#' id="remove-cart" data-id=${element._id} style='background-color:red;'><i class='fa fa-trash'></i></a>
                                  <a   href="#" style='background-color:green;' id='order' data-price='${element.price}' >Order</a></td>

                                   </tr>`);

                              }
                  
                             }
                              c++;
                          });   
                      
                    output=output.concat(`<tr id='lstchd'></tr></table><br>`);
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
        
    $(document).on('keyup','#qty',function(){
          let price=$(this).parent().next().data('price')
          let input=$(this).val();
          if(input<=0){
             return;
          }
          let totalprice=price*input;
          $(this).parent().next().text(totalprice)
          let table=$(this).parent().parent().parent().parent()
          table.find('#lstchd').html(`<td colspan='8' style='text-align:right;' id='totalAmount'><b>Total Amount:-</b>${totalprice}</td>`)

          
        


    })
    let totalprice=''
 function loadTotal(){
    let price=$(this).parent().next().data('price')
    let input=$(this).val();
    if(input<=0){
       return;
    }
     totalprice=price*input;
    $(this).parent().next().text(totalprice)
    let table=$(this).parent().parent().parent().parent()
    table.find('#lstchd').html(`<td colspan='8' style='text-align:right;' id='totalAmount'><b>Total Amount:-</b>${totalprice}</td>`)
   
 }
 loadTotal();


});