

$(document).ready(function(){
  let total_price;
  $('#price').keyup(function(){
    
    let price=$(this).val();
    let gst=$('#gst').val();
    let gstAmount = (price * gst)/100;
    total_price=Number(gstAmount)+Number(price);
    $('#total_price').val(total_price);
  
    
  });
 

   $(document).on('change','#input',function(event){
     const imagesArray=event.target.files;
     const uplaodImg=document.getElementById('imges');
     if(imagesArray.length<=5){
     for(let item in imagesArray){
       
       console.log(item);
      let src=URL.createObjectURL(imagesArray[item]);
      let img=document.createElement('img');
      let div=document.createElement('div');
      img.style.width='8rem';
      img.style.border='2px solid grey';
      img.style.height='8rem';
      img.style.borderRadius='5px';
      img.style.marginRight='3px';
      img.src=src;
      let child=$('#uploadlabel').children('i');
        
      $(child).css('z-index:-1');
      $(uplaodImg).append(div).append(img);
      $('#upload-error').text('');
    }
  }else{
    $(this).val(null);
    $('#upload-error').text('You can not upload more then 5 images');
  }
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