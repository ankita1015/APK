


$('.view-img').click(function(){
    let src=$(this).attr('src');
    const order_img=document.getElementById('order-img');
   
    order_img.src=src;


});

var description=$('#description').val();
     description=description.split('.')
     description.forEach(data=>{
         $('.product-details').append(`<h5><i class="fas fa-chevron-right"></i> ${data}</h5>`)
     })
$('.fa-chevron-down').click(function(){
  $('.product-details').show();
  $('#up-down').html('<i class="fas fa-chevron-up"></i>')

});



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
                    sub_category=sub_category.concat(`<div class='col-md-3'>
                    <input type='hidden' name='category_name' id='category-name'value=${cat_name}>
                    <input type='number' class="form-control" id='sub_category' name='sub_category' placeholder='Kg#'></div>` )
                    break;
                   }else{
                   sub_category=sub_category.concat(`<div class="form-group col-sm-3 sub1">
                    <input type='hidden' name='category_name' id='category-name'value=${sub_title.subcategory.category_name[i]}>`);
                    category_name.push(sub_title.subcategory.category_name[i]);
                    sub_category=sub_category.concat(`<select name='sub_category' id='sub_category' class="form-control">
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
var c1=Array();
function loadShop(...args){


  var output=` <h4 style="text-align: center;">Select Your Shop/Company</h4>
                     <hr><table id='shop-order'>
                           <tr>
                               <th>Shop Name</th>
                               <th>State</th>
                               <th>City</th>
                               <th>Address</th>
                               <th>Pincode</th>
                               <th>Mobile No</th>
                               <th>Available</th>
                               <th>Select</th>
                               
                           </tr>`
                           let obj=JSON.stringify(args);
                           $.post('/load-order-shop',
                           {
                            obj
                           },function(data,status){
                             console.log(data);
                            data.forEach(element=>{

                              output=output.concat(`<tr> 
                                  <td>${element.shopId.shopname}</td>
                                  <td>${element.shopId.state}</td>
                                  <td>${element.shopId.city}</td>
                                  <td id='td-address'><p>${element.shopId.address}</p><p>${element.shopId.address2}</p></td>
                                  <td>${element.shopId.area_code}</td>
                                  <td>${element.shopId.mobileNo}</td>
                                  <td><button style='background-color:lightgreen;width:50px;padding:3px;' >available</button></td>
                                  <td><button style='background-color:lightgreen;width:50px;padding:3px;' class='select_shop'  
                                     data-shop_id=${element.shopId._id} 
                                     data-price=${element.total_price}
                                     data-gst=${element.gst}>Select</button></td>
                              </tr>`)
                          })
                         output=output.concat(`</table>`);
                         $('.order-shop-div').html(output) 
                            
                           })
                        
                          
let price;

$(document).on('click','.select_shop',function(){
  let cat_name=$('#category-name').val();
 
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
  
 let gst=$('.select_shop').data('gst')
  $('#price').text(`Rs.${((price * qty)% gst)+(price*qty)}`)

})
}

$(document).on('change','#sub_category',function(){
  let cat_name=$('#category-name').val();
  if(cat_name != 'kg'){
     c1.push($(this).val());
     cat1=c1[0];
     cat2=c1[1];

    var p_id=$('#productid').val();
    loadShop(p_id,cat1,cat2)
  }else{
    kg=$(this).val();
   
 
   price=$('.select_shop').data('price');
  
  $('#price').text(`Rs.${price * kg}`)
  }
});
let pid=$('#productid').val();
loadShop(pid);



$('.cart').click(function(){
    let categoryid=$('#product-category').val();
    let productid=$('#productid').val();
    let shopid=$('#shopid').val();
    let qty=$('#qty').val();
    let total_price=$('#price').text();
        total_price=total_price.replace('Rs.','');
        
    fetch('/add-cart',{
      method:'POST',
      headers:{
          'Content-Type':'application/json'
      },
      body:JSON.stringify({
         category_name:category_name,
         category_value:c1,
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
  
  let qty=$('#qty').val();
  let productid=$('#productid').val();
  let total_price=$('#price').text();
  total_price=total_price.replace('Rs.','');


  
   window.location.assign(`/insert-order?id=${productid}&qty=${qty}&price=${total_price}`)
})