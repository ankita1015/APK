

$.ajax({
    url:'/load-cart-products',
    type:'POST',
    success:function(data){
      let output=`<h5 class="mb-4">Cart (<span>${data.length}</span> items)</h5>`;
                
        data.forEach(element => {
            
       output=output.concat(`<hr class="mb-4">
      <div class="row mb-4">
      <div class="col-md-5 col-lg-3 col-xl-3">
        <div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
          <img class="img-fluid w-100"
            src="${element.productId.images[0]}" alt="Sample">
          <a href="#!">
            <div class="mask waves-effect waves-light">
              <img class="img-fluid w-100"
                src="${element.productId.images[0]}">
              <div class="mask rgba-black-slight waves-effect waves-light"></div>
            </div>
          </a>
        </div>
      </div>
      <div class="col-md-7 col-lg-9 col-xl-9">
        <div>
          <div class="d-flex justify-content-between">
            <div>
              <h5>${element.productId.product}</h5>
              <p class="mb-3 text-muted text-uppercase small">${element.category.categoryname}</p>`);
              if(element.sub_category.category_name!='kg'){
             let i=0
                element.sub_category.category_name.forEach(cat=>{

                    output=output.concat(`
                <p class="mb-2 text-muted text-uppercase small">${cat}:${element.sub_category.category_value[i]}</p>
                `)
                i++;
            })
   
              }
           output=output.concat(`</div>
            <div>
              <div class="def-number-input number-input safari_only mb-0 w-100">
              <input type='hidden' id='price' value=${element.price}>
                <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                  class="minus"></button>
                <input class="quantity" min="0" name="quantity" id='qty' value="1" type="number">
                <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                  class="plus"></button>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <a href="#!" type="button" id='remove-cart' data-id=${element._id} class="card-link-secondary small text-uppercase mr-3"><i
                  class="fas fa-trash-alt mr-1"></i> Remove item </a>
              
            </div>
            
            <p class="mb-0"><span id='totalprice'><strong>Rs.${element.price}</strong></span></p>
          </div>
        </div>
      </div>
    </div>
    `);
        });

   output=output.concat(`<p class="text-primary mb-0"><i class="fas fa-info-circle mr-1"></i> Do not delay the purchase, adding
    items to your cart does not mean booking them.</p>`)
    $('.cart-body').html(output);
    }

   
})
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
      
$(document).on('keyup','#qty',function(){
    
    let qty=$(this).val()
    let price=$(this).parent().find('#price').val();
    
   
    if(qty<=0){
       return;
    }
    let totalprice=qty*price;
   
    let divprice=$(this).parent().parent().parent().parent().find('#totalprice').text(`Rs.${totalprice}`)
    


   setTotalPrice()
})

const setTotalPrice=()=>{
    let divprice=$('main').find('#totalprice')
    let total=0

    for(let i=0;i<divprice.length;i++){
             
       total=total+ Math.floor(divprice[i].innerText.split('.')[1])
    }
   
  $('main').find('#totalamount').text(`Rs.${total}`);
 
}

setTotalPrice()

