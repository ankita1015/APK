const addcartbtn=document.getElementById('cart')



addcartbtn.addEventListener('click',()=>{
    let id=$(addcartbtn).data('id');
    if(addcartbtn.innerText=='Add to cart'){
    $.ajax({
        url:'/add-cart',
        type:'POST',
        data:{id},
        success:function(data){
            if(data==1){
        addcartbtn.innerText='Added..';
        addcartbtn.style.color='red';
            }
        }
    })
}
})