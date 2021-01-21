const express = require('express')
const path = require('path')
const app = express()

//public STATIC PATH
app.use(express.static(path.join(__dirname, '/public/')))
//set Engine

app.set('view engine', 'hbs')



app.get('/', (req, res) => {
    res.render('index')
})



const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`server runnign at ${PORT}`))