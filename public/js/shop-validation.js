function Close() {
  setTimeout(() => {
      $('#e-error').css("display","none");
      $('#p-error').css("display","none");
     
  },2000);
  
}
var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;


$('.login').click(function(e){
  e.preventDefault();


  var email=$('.login-email').val();
  var password=$('.login-password').val();
  if(email==''){
    document.getElementById('e-error').innerHTML="<span>email can't blank</span>";
    $('#e-error').css("display","block");
    Close();
  
    return;  
   }else if(!filter.test(email)){
     document.getElementById('e-error').innerHTML="<span>Invalid email</span>";
     $('#e-error').css("display","block");
     Close();
   
    return;
   }

   if(password==''){
       document.getElementById('e-error').innerHTML="<span> Password can't be blank</span>";
       $('#e-error').css("display","block");
       Close();
       e.preventDefault();
       return;
   }

    $.ajax({
      url:'/login',
      type:"POST",
      data:{email,password},
      success:function(data){
  
        if(data==1){
          window.location.assign('/shop'); 
        }else if(data=='email_error'){
          document.getElementById('e-error').innerHTML="<span>email does not exist</span>";
          $('#e-error').css("display","block");
          Close();

        }else if(data=='password_error'){
          document.getElementById('e-error').innerHTML="<span>wrong password</span>";
          $('#e-error').css("display","block");
          Close();


      
        }
      }
       
    })
})


$(".save").click(function(e){

  e.preventDefault();
    var name=$('.name').val();  
  
    var email=$('.email').val()
   
    var password=$('.password').val()
    var cpassword=$('.re_password').val()
    var letters = /^[a-z][a-z\s]*$/;
   
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
  
      if(cpassword==''){
          document.getElementById('p-error').innerHTML="<span> Confirm Password can't be blank</span>";
          $('#p-error').css("display","block");
          Close();
          e.preventDefault();
          return;
      }else if(password!=cpassword){
          document.getElementById('p-error').innerHTML="<span>Password and Confirm password both are not same</span>";
          $('#p-error').css("display","block");
          Close();
          e.preventDefault();
          return;
      }

   
     
     
       let role=1
       $.ajax({
               url:'/',
               type:"POST",
               data:{name,email,password,cpassword,role},
               success:function(data){
                
      if(data==1){  
      $('.name').val("")  
      $('.email').val("")
      $('.password').val("")
      $('.re_password').val("")    
      window.location.assign('/shop')   
      }


               }
       });
      });

   
      
      
    $('#create-account').click(function(e){
      e.preventDefault()
      var shopname=$('#shopname').val() 
      var address1=$('#address1').val()
      var address2=$('#address2').val()
      var city=$('#city').val()
      var state=$('#state').val()
      var code=$('#code').val()
      var mobileNo=$('#mobileNo').val()
      var gst=$('#gst').val()
     
      if(shopname=='' || shopname==undefined){
         document.getElementById('s-error').innerHTML=`<span>Shop Name can't be blank</span>`;
         $('#s-error').css("display","block"); 

         return
     }  
     
        if(address1=='' || address1==undefined){
            document.getElementById('s-error').innerHTML=`<span>Shop Address can't be blank</span>`;
            $('#s-error').css("display","block");  
            return
        }
  
      if(city =='' || city==undefined){
            document.getElementById('s-error').innerHTML=`<span>city can't be blank</span>`;
            $('#s-error').css("display","block");  
            return
        }
    if(state =='' || state==undefined){
        document.getElementById('s-error').innerHTML=`<span>State can't be blank</span>`;
        $('#s-error').css("display","block");  
        return
        }

        if(code=='' || code==undefined){
            document.getElementById('s-error').innerHTML=`<span>Area code can't be blank</span>`;
            $('#s-error').css("display","block");  
            return
        }
       $.ajax({
           url:'/shop',
           type:'POST',
           data:{shopname,address1,address2,city,state,code,gst,mobileNo},
           success:function(data){
         window.location.assign('/ourorders'); 
           }
       })
  })
 $('#s-error').click(function(){
   $(this).hide();
 })
