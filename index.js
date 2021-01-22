const express = require('express')
const path = require('path')
const app = express();
const hbs=require('hbs');

//public STATIC PATH
app.use(express.static(path.join(__dirname, '/public/')))
//set Engine
hbs.registerPartials(path.join(__dirname, './pars'));
app.set('view engine', 'hbs');



app.get('/', (req, res) => {
    res.render('index')
})
app.get('/single',(req,res)=>{
    res.render('single');
})
app.get('/sign',(req,res)=>{
    res.render('signup');
})



const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`server runnign at ${PORT}`))