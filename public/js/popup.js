document.getElementById('loginbtn').addEventListener('click',()=>{
  alert('hello');
  document.getElementById('myModal').style.display='block';
  document.getElementById('tabpanel').style.display='block';
  document.getElementById('register').style.display='none';

})

document.getElementById('close').addEventListener('click',()=>{
 document.getElementById('myModal').style.display='none';
});

document.getElementById('signform').addEventListener('click',()=>{
 // document.getElementById('signform').style.border='2px solid black';
  //document.getElementById('loginform').style.border='none';
    
    
  document.getElementById('tabpanel').style.display='none';
  document.getElementById('register').style.display='block';
  document.getElementsById('modal-form').style.display='block';
});

document.getElementById('loginform').addEventListener('click',()=>{
  //document.getElementById('signform').style.border='none';
  //document.getElementById('loginform').style.border='2px solid black';
    
  document.getElementById('tabpanel').style.display='block';
  document.getElementById('register').style.display='none';
   
   
});

 