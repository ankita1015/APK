const sliderdocument=require('../modals/slidermodal');
const upload=require('../middleware/upload');
module.exports=async(req,res,next)=>{
     try{
        let uploadimages=Array();
      
        upload(req,res,(err)=>{
       
        req.files.forEach(element => {
          //get path from images//
           let imgpath=element.path;
         //make path correct with splite function//
           let  fixpath=imgpath.split('\\')
          //make array of path//
            uploadimages.push(`/${fixpath[1]}/${fixpath[2]}`);
         });
         
         slider_update(uploadimages);
        })
      async function slider_update(uploadimages){
            let slider=new sliderdocument({
                img:uploadimages,
            })
            await slider.save();
             res.render('update-slider')    
      } 
    

     }catch(err){

     }
}