$(".register").submit(function(e){
    
    var name=$("#name").val();
    var email=$("#s-email-address").val();
    var password=$("#s-password").val();
    var conpassword=$("#s-confirm-password").val();

 var letters = /^[a-z][a-z\s]*$/;
 var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
function Close() {
    setTimeout(() => {
        $('#p-error').css("display","none");
       
    },2000);
    
}
    if(name==''){
        
        document.getElementById('p-error').innerHTML="<span>name can't blank</span>";
        $('#p-error').css("display","block");
        Close();
        e.preventDefault();
        return;  
    }else if(name.match(letters)==false){
        document.getElementById('p-error').innerHTML="<span>name must be in character only</span>";
        $('#p-error').css("display","block");
        Close();
        e.preventDefault();
        return; 
    }

    if(email==''){
     document.getElementById('p-error').innerHTML="<span>email can't blank</span>";
     $('#p-error').css("display","block");
     Close();
     e.preventDefault();
     return;  
    }else if(!filter.test(email)){
     document.getElementById('p-error').innerHTML="<span>Invalid email</span>";
     $('#p-error').css("display","block");
     Close();
     e.preventDefault();
     return;
    }

    if(password==''){
        document.getElementById('p-error').innerHTML="<span> Password can't be blank</span>";
        $('#p-error').css("display","block");
        Close();
        e.preventDefault();
        return;
    }

    if(conpassword==''){
        document.getElementById('p-error').innerHTML="<span> Confirm Password can't be blank</span>";
        $('#p-error').css("display","block");
        Close();
        e.preventDefault();
        return;
    }else if(password!=conpassword){
        document.getElementById('p-error').innerHTML="<span>Password and Confirm password both are not same</span>";
        $('#p-error').css("display","block");
        Close();
        e.preventDefault();
        return;
    }
    
})