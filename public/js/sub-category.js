$(document).ready(function(){
    $('.add-sub-category').click(function(e){
        e.preventDefault();
        let categoryId=$('#category').val();
        let category_name=$('input[name="sub_cat_name[]"]').map(function(){
            return this.value;
            })
        let category_value=$('input[name="sub_cat[]"]').map(function(){
            return this.value;
             })
        let standerd=$('#add-sat').val(); 
       
        fetch('/sub-category',{
         method:'POST',
         headers:{
             'Content-Type':'application/json'
         },
         body:JSON.stringify({
            category_name:category_name,
            category_value:category_value,
            categoryId:categoryId,
            standerd:standerd
         })
    }).then((result)=>{
        
        $('input[name="sub_cat_name[]"]').val('')
        $('input[name="sub_cat[]"]').val('');
        $('#add-sat').val('');

    })
 })


$('#more-category-btn').click(function(){
        $('.more-category-field').show();
})

     $(document).on('click','#delete-category',function(){
         let id = $(this).data('id');
         let ans=confirm('Are you sure you want to delete this item?')
        if(ans){
         $.ajax({
             url:'/delete-sub-category',
             type:'POST',
             data:{id,},
             success:function(data){
                 
             }
         })
        }
     })
     $(document).on('click','#edit-category',function(){
         let id=$(this).data('id');
         
         $.ajax({
             url:'/load-sub-category',
             type:'POST',
             data:{id,action:'edit'},
             success:function(data){
                 console.log(data);
                   let modal = ` <div class="modal-content">
                                 <span class="close">&times;</span>
                                 <form action="/update-sub-category" method="POST" style=" margin-top:30px;padding:10px" >
                                 <h3 style="text-align: center;">Edit Category</h3>
                                 <div class="form-group">
                                 <label for="Add-category">Edit category</label>
                                 <input type="hidden" value=${data[0]._id} class="form-control" name="category_id">
                                 <input type="text" value="${data[0].categoryId.categoryname}" class="form-control" name="category"  placeholder="Enter Category">
                                 </div>`
                    let st=0;
                    let a=true
                    while(a)
                        {
                            let cat_name= data[0].subcategory.category_name[st];
                            if(cat_name=='' || cat_name==undefined){
                                 a=false
                            }else{
                        modal=modal.concat(`<div class="form-group">
                        <label for="Add-category">${cat_name}</label>
                        <input type="text" value=${cat_name} class="form-control" name="category_name"  placeholder="${cat_name}">
                        <input type="text" value=${data[0].subcategory.category_value[st]} class="form-control" name="category_value"  placeholder="${cat_name}">
                      </div>
                        `)
                        st++;
                            }

                        }
                     modal=modal.concat(`
                     <div class="form-group">
                     <label for="Add-category">Standard</label>
                      <input type="text" value="${data[0].standard}" class="form-control" name="standard"  placeholder="Standard#">
                      <hr>
                     <button type="submit" class="btn btn-primary" style="margin-left:43%;">Update</button>
                     </form>
                     </div>`);
                 
                  // Get the modal

                 var modal_frm = document.getElementById("myModal");
                 modal_frm.innerHTML=modal;
                 modal_frm.style.display = "block";
             }
         })
         
     })
       $(document).on('click','.close',function(){
           $('#myModal').hide();
       })  
        $.ajax({
         url:'/load-all-category',
         type:'POST',
         success:function(data){
                 data.forEach(element=>{
                     $('#category').append(`<option value=${element._id}>${element.categoryname}</option>`)
                     $('#load_category').append(`<option value=${element._id}>${element.categoryname}</option>`)
                 })
         
        }
     });
 $('#load_category').change(function(){
     var id=$(this).val();
     $.ajax({
         url:'/load-sub-category',
         type:'POST',
         data:{id,action:'load'},
         success:function(data){
                if(data.length==0){
                    $('.load-category').html(`<p id='e-error' style='text-align:center;border:1px solid lightgrey;padding:3px;margin:5px;background-color:lightgrey;'><span>No categories have been added yet.</span></p>`)
                    return;
                }        
               let sub_category_table=`<table class='shop-table'><tr>
                 <th>Sr No</th>
                 <th>Category Name</th>`;
             data.forEach(element=>{
                 let cnt=1;
                 let a=true
                 let i=0;
                 while(a){
                      let cat_name=element.subcategory.category_name[i];
                     if(cat_name=='' || cat_name==undefined){
                         a=false
                     }else{
                      sub_category_table=sub_category_table.concat(`<th>${cat_name}</th>`);
                  i++
                   }

                 }
                 
                sub_category_table=sub_category_table.concat(`<th>Standard</th>
                                                              <th>Action</th></tr>`)
                sub_category_table=sub_category_table.concat(`<tr>
                                                       <td>${cnt}</td>
                                                       <td>${element.categoryId.categoryname}</td>`);
                                                       a=true
                                                       i=0
                                                       while(a){
                                                           let cat_value=element.subcategory.category_value[i];
                                                           if(cat_value=='' || cat_value==undefined){
                                                              a=false;           
                                                           }else{
                                                             sub_category_table=sub_category_table.concat(`<td>${cat_value}</td>`)
                                                             i++;                   
                                                           }              
                                                        }
                                                        sub_category_table=sub_category_table.concat(`<td>${element.standard}</td>
                                                                                                       <td>  <a href='#' data-id=${element._id} id='edit-category'  style='margin:5px;background-color:white;font-size:13px'><i class='fa fa-edit' style='color:black;'></i></a>
                                                                                                        <a href='#' data-id=${element._id} id='delete-category' style='margin:5px;background-color:white;font-size:13px'><i class='fa fa-trash' style='color:red;'></i></a>
                                                                                                        </td><tr>`)    
                                                                    
              cnt++; 
             })
             sub_category_table=sub_category_table.concat('</table>');
          $('.load-category').html(sub_category_table);   
         }
     })
 })     


 });
