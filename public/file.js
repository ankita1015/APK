let Src;

let divArray=[
  document.getElementById('file-ip-1-preview'),
  document.getElementById('file-ip-2-preview'),
  document.getElementById('file-ip-3-preview'),
  document.getElementById('file-ip-4-preview'),
  document.getElementById('file-ip-5-preview')
]

let count=0;
let imgArray=Array();
function showpreview(event){
  if(count<5){

    Src=URL.createObjectURL(event.target.files[0]);
  
    divArray[count].src=Src;
    divArray[count].style.display='block';
    imgArray.push(Src);
    
  }
  console.log(imgArray);
  count++;
 


}


