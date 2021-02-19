$(document).ready(function(){
   $(document).on('click','#cart',function(){
       let id=$(this).data('id');
       if($(this).text()=='Add to cart'){
        $.ajax({
            url:'/add-cart',
            type:'POST',
            data:{id},
            success:function(data){
            if(data==1){
            $(this).text('added..');                }
            }
        })
    }
   });
  
});
