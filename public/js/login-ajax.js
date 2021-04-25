const login_btn=document.getElementById('login-btn');

var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

login_btn.addEventListener('click',(e)=>{
    function Close() {
    setTimeout(() => {
        $('#e-error').css("display","none");
       
    },2000);
}
    e.preventDefault();
     let email=$('.login-email').val();
     let password=$('.login-password').val();
     
     if(email==''){
        
       document.getElementById('e-error').innerHTML="<span><b>email can't blank</b></span>";
       $('#e-error').show()
       Close()
     return;     
     }else if(!filter.test(email))
    {
        document.getElementById('e-error').innerHTML="<span><b>Invalid email</b></span>";
        $('#e-error').css("display","block");
        Close()
        return;
    }
    

    if(password==''){
     document.getElementById('e-error').innerHTML="<span><b>Password can't be blank</b></span>";
     $('#e-error').css("display","block");
     Close()
     return;
     }
   
    
     
     $.ajax({
       url:'/login',
       type:'POST',
       data:{email,password},
       success:function(data){

         
           if(data==0){
         window.location.assign('/');
     
        }else if(data=='email_error'){
          document.getElementById('e-error').innerHTML="<span><b>Email does not exist</b></span>";
          $('#e-error').css("display","block");
          Close()

        }else if(data=='password_error'){
          document.getElementById('e-error').innerHTML="<span><b>Wrong Password</b></span>";
          $('#e-error').css("display","block");
          Close()
 
        }
     }
     });

    
    
})