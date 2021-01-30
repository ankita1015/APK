
count=0;
const uploadFiles=(event)=>{

let imgOject=[
  document.getElementById('i1'),
  document.getElementById('i2'),
  document.getElementById('i3'),
  document.getElementById('i4'),
  document.getElementById('i5')
];


 if(count<5){
  let uploadcontainer=document.getElementById('upload-container');
  let src=URL.createObjectURL(event.target.files[0]);
  imgOject[count].src=src;
  imgOject[count].style.display='block';
  count++;
  if(count==5){
    count=0;
  }
 } 
  
  
 
}

  

 


const removeImg=(e)=>{

var cfm=confirm('Do You want to Remove this image?');
if(cfm===true){  


document.getElementById(e.path[0].id).src='';
document.getElementById(e.path[0].id).style.display='none';

count--;

}
}