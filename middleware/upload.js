const path=require('path');
const multer=require('multer');
const storage=multer.diskStorage({
    destination:'./public/uploadimg/',
    filename:function(req,file,cb){
        cb(null,file.fieldname +'-'+Date.now()+path.extname(file.originalname));
    }

});
const upload=multer({
storage:storage
}).array('images',5);


module.exports=upload;