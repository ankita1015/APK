
const sub_category_document=require('../modals/sub-categorymodal');
module.exports=async(req,res)=>{
    try{
        let= categoryData=req.body
        let standard=req.body.standerd
        
            // categoryData=JSON.parse(categoryData);
         delete categoryData.category_name.length;
         delete categoryData.category_name.prevObject;
         delete categoryData.category_value.length;
         delete categoryData.category_value.prevObject;
        

    categoryData={category_name:categoryData.category_name,
                  category_value:categoryData.category_value
    }
   
   let subcategoryDoc=new sub_category_document({
        categoryId:req.body.categoryId,
        subcategory:categoryData,
        standard,
    })
    await subcategoryDoc.save();
    res.send('1')
    }catch(err){
console.log(err);
    }
}