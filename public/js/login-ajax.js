const login_btn=document.getElementById('login-btn');

var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

login_btn.addEventListener('click',(e)=>{
    e.preventDefault();
     let email=$('#login-email').val();
     let password=$('#password').val();
     if(email==''){
     document.getElementById('e-error').innerHTML="<span class='error-icon'>X</span> Email can't blank";
     return;     
     }else if(!filter.test(email))
    {
        document.getElementById('e-error').innerHTML="<span class='error-icon'>X</span> invalid email";
        return;
    }else{
        document.getElementById('e-error').innerHTML="";
    }

    if(password==''){
     document.getElementById('p-error').innerHTML="<span class='error-icon'>X</span> Password can't be blank";
     return;
     }else{
        document.getElementById('p-error').innerHTML="";
     }
    
     
     $.ajax({
       url:'/login',
       type:'POST',
       data:{email,password},
       success:function(data){

       }

     });

    
    
})