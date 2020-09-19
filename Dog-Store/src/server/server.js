const express = require ('express')
const bodyParser = require('body-parse')

const Port = 3000

const app  = express()

app.use(bodyParser.json())

app.get('/',function(req,res){
    res.send('Hello Server You there')
})

app.listen(PORT,function()
    {
        console.log('Server running on local host' + PORT)
    }
)