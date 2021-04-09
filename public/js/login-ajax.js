const login_btn=document.getElementById('login-btn');

var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
$(document).on("click",".error-icon",function(){
    $('#e-error').css("display","none");
 })
login_btn.addEventListener('click',(e)=>{
    e.preventDefault();
     let email=$('.login-email').val();
     let password=$('.login-password').val();
     if(email==''){
     document.getElementById('e-error').innerHTML="<span class='error-icon' style='margin-right:45%;cursor:pointer'>X</span><span>email can't blank</span>";
     $('#e-error').css("display","block");
     return;     
     }else if(!filter.test(email))
    {
        document.getElementById('e-error').innerHTML="<span class='error-icon' style='margin-right:45%;cursor:pointer'>X</span><span>Invalid email</span>";
        $('#e-error').css("display","block");
        return;
    }
    

    if(password==''){
     document.getElementById('e-error').innerHTML="<span class='error-icon' style='margin-right:45%;cursor:pointer'>X</span><span> Password can't be blank</span>";
     $('#e-error').css("display","block");
     return;
     }
   
    
     
     $.ajax({
       url:'/login',
       type:'POST',
       data:{email,password},
       success:function(data){
           if(data==0){
window.location.assign('/');
     
      }
     }
     });

    
    
})