$(document).ready(function(){
    alert('hello');
    $(document).on('click','#remove-cart',function(e){
e.preventDefault();
        let id=$(this).data('id');
        alert(id);
       $.ajax({
             url:'/reomve-cart',
             type:'POST',
             data:{id},
             success:function(data){
             
            }
         })
    
    });
 });
 