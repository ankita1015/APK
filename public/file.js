

$(document).ready(function(){
   $(document).on('change','#input',function(event){
    
     let src=URL.createObjectURL(event.target.files[0]);
    
     let img=document.createElement('img');
     img.src=src;
     let uplaodImg=$(this).parent();
     let child=$(uplaodImg).children('i');
   
     $(child).css('z-index:-1');
     $(this).parent().html(img);
     });
});



  

 


const removeImg=(e)=>{

var cfm=confirm('Do You want to Remove this image?');
if(cfm===true){  


document.getElementById(e.path[0].id).src='';
document.getElementById(e.path[0].id).style.display='none';

count--;

}
}