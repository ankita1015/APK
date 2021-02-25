$(document).ready(function(){
   $(document).on('click','#cart',function(){
       let id=$(this).data('id');
       let cat_id=$(this).data('cat_id');
       alert(cat_id);
       if($(this).text()=='Add to cart'){
        $.ajax({
            url:'/add-cart',
            type:'POST',
            data:{id,cat_id},
            success:function(data){
            if(data==1){
            $(this).text('added..');                }
            }
        })
    }
   });
  
});
