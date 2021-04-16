$('.login').click(function(e){
  e.preventDefault();


  var email=$('.login-email').val();
  var password=$('.login-password').val();
    $.ajax({
      url:'/login',
      type:"POST",
      data:{email,password},
      success:function(data){
  
        if(data==1){
          window.location.assign('/shop'); 
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

    var letters = /^[A-Za-z\s]+$/;
   var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      $(document).on("click",".error-icon",function(){
      $('#e-error').css("display","none");
      })
       if(name=='' || name==undefined){
          document.getElementById('e-error').innerHTML=`<span class='error-icon' 
            style='cursor:pointer;'>X</span><span style='color:red;'>Name can't be blank</span>`;
          $('#e-error').css("display","block");  
             return
       }else if(!name.match(letters)){
        document.getElementById('e-error').innerHTML=`<span class='error-icon' 
        style='cursor:pointer'>X</span><span>Name must be in Alphabetical only</span>`;
         $('#e-error').css("display","block");  
           return
       }
       if(email=='' || email==undefined){
           document.getElementById('e-error').innerHTML=`<span class='error-icon' 
          style='cursor:pointer'>X</span><span>Email can't be blank</span>`;
          $('#e-error').css("display","block");  
             return
       } else if(!filter.test(email)){
           document.getElementById('e-error').innerHTML=`<span class='error-icon' 
          style='cursor:pointer'>X</span><span> Invalid email id</span>`;
          $('#e-error').css("display","block");  
             return
       }
       if(password=='' || password==undefined){
           document.getElementById('e-error').innerHTML=`<span class='error-icon' 
          style='cursor:pointer'>X</span><span>Password can't be blank</span>`;
          $('#e-error').css("display","block");  
              return
        }
       if(cpassword=='' || cpassword==undefined){
           document.getElementById('e-error').innerHTML=`<span class='error-icon' 
          style='cursor:pointer'>X</span><span>Confirm-password can't be blank</span>`;
          $('#e-error').css("display","block");    
              return
        }

         if(password!=cpassword){
              document.getElementById('e-error').innerHTML=`<span class='error-icon' 
          style='cursor:pointer'>X</span><span>password & confirm-password must be same </span>`;
          $('#e-error').css("display","block");  
              return
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
