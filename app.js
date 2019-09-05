if (!process.env.NODE_ENV || process.env.NODE_ENV ==="development"){
    require('dotenv').config
}
const express = require("express")
const app = express()
const port = process.env.PORT || 3000
const mongoose = require('mongoose')
const db_url = process.env.DB_URL
const cors = require("cors")
const indexRoutes = require('./routes/indexRoutes')

mongoose.connect(db_url,{useNewUrlParser:true})
.then(function(){
    console.log("db connected")
})
.catch(function(){
    console.log("fail to connect to database")
})

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

app.use('/', indexRoutes)

app.use(erroHandler)

app.listen(port, ()=>{
    console.log(`listening to port ${port}`)
})





