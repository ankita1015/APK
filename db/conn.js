const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/matirialsDB',{
    useCreateIndex:true,
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log("connection is done");
    
}).catch((err)=>{
console.log(`something went to wrong with ${err}`)
});

