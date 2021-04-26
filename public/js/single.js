





var description=$('#description').val();
     description=description.split('.')
     description.forEach(data=>{
         $('.product-details').append(`<h5><i class="fas fa-chevron-right"></i> ${data}</h5>`)
           
        })
      




let id=$('#product-category').val()

let category_name=Array();
$.ajax({
  url:'/load-single-sub-category',
  type:'POST',
  data:{id},
  success:function(data){
    let sub_category='';
    let a=true
    let ab=true;
    let cnt=0;
    let i=0;
    data.forEach(sub_title=>{
      while(a){
          
            let cat_name=sub_title.subcategory.category_name[i];
            
                  if(cat_name=='' || cat_name==undefined){
                   a=false
                  }else{
                   
                   if(cat_name=='Kg' || cat_name =='KG' || cat_name=='kg'){
                   

                   
                    $('#category-load').html(`
                    <input type='hidden' name='category_name' id='category-name'value=${cat_name}>
                    <div class="def-number-input number-input safari_only mb-0">
                    <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                      class="minus"></button>
                    <input class="quantity" id='sub_category' min="0" name="quantity" value="1" type="number">
                    <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                      class="plus"></button>
                  </div>`)
                    break;
                   }else{
                   sub_category=sub_category.concat(`<div class="form-group col-sm-5 sub1">
                    <input type='hidden' name='category_name' id='category-name'value=${sub_title.subcategory.category_name[i]}>`);
                    category_name.push(sub_title.subcategory.category_name[i]);
                    sub_category=sub_category.concat(`<select name='sub_category' class='${category_name[i]} form-control' id='sub_category' class="form-control">
                    <option selected disabled>${sub_title.subcategory.category_name[i]}</option>`);
                   i++; 
                   
                  while(ab){

                  let cat_value=sub_title.subcategory.category_value[cnt];
                  
                  if(cat_value=='' || cat_value==undefined){
                    a=false;
                  }else{
                    let sub_value=cat_value.split(',');
                    sub_value.forEach(val=>{
                        sub_category=sub_category.concat(`<option value='${val}'>${val}</option>`);
                       
                    });
                    cnt++;
                  }
                  break;
                  }
                  sub_category=sub_category.concat(`</select>
                  </div>`);  
                  }
                }        
                    
                               
          }
    })
   
$('#sub-category').html(sub_category);
  }

})

function loadShop(...args){






  var output=` <h4 style="text-align: center;">Select Your Shop/Company</h4>
                     <hr><table style='background-color:white;' class='table table-striped table-bordered mt-3'><thead>
                           <tr style='background-color:lightblue;'>
                               <th scope="row" class="w-150 dark-grey-text h6">Shop Name</th>
                               <th scope="row" class="w-150 dark-grey-text h6">State</th>
                               <th scope="row" class="w-150 dark-grey-text h6">City</th>
                               <th scope="row" class="w-150 dark-grey-text h6">Address</th>
                               <th scope="row" class="w-150 dark-grey-text h6">Pincode</th>
                               <th scope="row" class="w-150 dark-grey-text h6">Mobile No</th>
                               <th scope="row" class="w-150 dark-grey-text h6">Available</th>
                               <th scope="row" class="w-150 dark-grey-text h6">Select</th>
                               
                           </tr></thead>`
                           let obj=JSON.stringify(args);
                           $.post('/load-order-shop',
                           {
                            obj
                           },function(data,status){
                             
                            data.forEach(element=>{

                              output=output.concat(`<tbody><tr> 
                                  <td class='w-150 dark-grey-text'>${element.shopId.shopname}</td>
                                  <td class='dark-grey-text'>${element.shopId.state}</td>
                                  <td class='dark-grey-text'>${element.shopId.city}</td>
                                  <td class='dark-grey-text' id='td-address'><p>${element.shopId.address}</p><p>${element.shopId.address2}</p></td>
                                  <td class='dark-grey-text'>${element.shopId.area_code}</td>
                                  <td class='dark-grey-text'>${element.shopId.mobileNo}</td>
                                  <td class='dark-grey-text'><button style='width:80px;padding:7px;'  class='btn btn-green'disabled >Availabel</button></td>
                                  <td class='dark-grey-text'><button style='width:70px;padding:7px;' class='btn btn-primary select_shop'  
                                     data-shop_id=${element.shopId._id} 
                                     data-price=${element.total_price}
                                     data-qty=${element.qty}
                                     data-gst=${element.gst}>Select</button></td>
                              </tr></tbody`)
                            })
                         output=output.concat(`</table>`);
                         $('#order-shop-div').html(output) 
                           
                           })
                      
                          
let price;

$(document).on('click','.select_shop',function(){
  let cat_name=$('#category-name').val();
  var leftqty=$(this).data('qty')
  $('#qty-info').text(`only ${leftqty}* product left`)
 
  price=$(this).data('price');
   $('#price').text(`Rs.${price}`)
   $('.cnt-gst').show();
   if(cat_name =='kg' || cat_name=='KG' || cat_name=='Kg'){
    
   }else{
    $('#qty').show() 
   }
  
 
   $('#shopid').val($(this).data('shop_id'));
  
})
let qty
$('#qty').change(function(){
  
   qty=$(this).val();
   
 
   price=$('.select_shop').data('price');
  
  $('#price').text(`Rs.${price * qty}`)
})
$('.cnt-gst').click(function(){
  price=$('.select_shop').data('price');
  let gst=$('.select_shop').data('gst');
 
  if(cat_name != 'kg' || cat_name != 'KG'|| cat_name !='Kg'){
    let gstprice=(price * qty)+(price*gst)/100;
    gstprice=Math.floor(gstprice)
   $('#price').text(`Rs.${gstprice}`)
  }
 else{
   let kg = $('#sub_category').val();
   let gstprice=(price * qty)+(price*gst)/100;
   gstprice=Math.floor(gstprice)
   $('#price').text(`Rs.${gstprice}`)
 }  
})
}
let attribute=Array()
let cate_value=Array()

$(document).on('change','#sub_category',function(){
  
  cat_name=$('#category-name').val();
 
  var c1=Array();
  if(cat_name != 'kg'){
    let class_=$(this).attr('class')
    class_=class_.replace('form-control','')
    if(!attribute.includes(class_)){
      
      attribute.push(class_)
   
      c1.push($(this).val());
     
      cat1=c1[0];
      cat2=c1[1];
         console.log(c1)
         cate_value.push(c1)
         console.log(cate_value)
    }else{
      if(class_==attribute[0]){
        cate_value[0]=$(this).val()
      }else if(class_==attribute[1]){
        cate_value[1]=$(this).val()
      }
    }
     console.log(cate_value)
    var p_id=$('#productid').val();
   
    loadShop(p_id,cat1,cat2)
  }else{
    var kg = $(this).val();
    cate_value[0]=$(this).val();
 
 
   price=$('.select_shop').data('price');
  
  $('#price').text(`Rs.${price * kg}`)
 
  }
});
let pid=$('#productid').val();
loadShop(pid);


let categoryid=$('#product-category').val();
$('.cart').click(function(){
     categoryid=$('#product-category').val();
    let productid=$('#productid').val();
    let shopid=$('#shopid').val();
    let qty=$('#qty').val();
    let total_price=$('#price').text();
        total_price=total_price.replace('Rs.','');
       
      console.log(category_name)
      console.log(cate_value)
    
      
        fetch('/add-cart',{
      method:'POST',
      headers:{
          'Content-Type':'application/json'
      },
      body:JSON.stringify({
         category_name:category_name,
         category_value:cate_value,
         categoryId:categoryid,
         shopid,
         productid,
         price,
         qty,
         total_price,
      })
          
 }).then((result)=>{
  window.location.assign('/cart')
 }).catch((err)=>{

 })
})
$('.order').click(function(){
 
      categoryid=$('#product-category').val();
  let productid=$('#productid').val();
  let shopid=$('#shopid').val();
  let qty=$('#qty').val();
  let total_price=$('#price').text();
      total_price=total_price.replace('Rs.','');
      
  
   if(cate_value=='' || cate_value==undefined){
    alert('You have not selected Category')
    return
   }
   if(total_price=='' ||total_price==undefined){
   alert('Select Shop Where you want to order')
   return
   }
   if(qty=='' || qty==undefined){
     alert('select Qty')
     return
   }
      fetch('/confirm-order',{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({
       category_name:category_name,
       category_value:cate_value,
       categoryId:categoryid,
       shopid,
       product_id:productid,
       price,
       qty,
       total_price,
       tn:0
    })
        
}).then((result)=>{
window.location.assign('/order')
}).catch((err)=>{

})
  
  
})

function relatedProduct(categoryid){
  $.ajax({
    url:'/related-product',
    type:"POST",
    data:{product_id:categoryid},
    success:function(data){
     let output=''

     data.forEach(ele=>{
       output=output.concat(` <div class="col-md-6 col-lg-3 mb-5">

       <!-- Card -->
       <div class="">

         <div class="view zoom overlay z-depth-2 rounded">
           <img class="img-fluid w-100"
             src="${ele.images[0]}" alt="Sample" >
           <a href="/more-information-product?productid=${ele._id}">
             <div class="mask">
               <img class="img-fluid w-100"
                 src="${ele.images[0]}">
               <div class="mask rgba-black-slight"></div>
             </div>
           </a>
         </div>

         <div class="pt-4">

           <h5>${ele.product}</h5>
          

         </div>

       </div>
       <!-- Card -->

     </div>`);
     })
     $('#related-product').html(output)
    }

  })
     
}


relatedProduct(categoryid)