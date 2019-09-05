const express = require('express')
const router = express.Router()
const userRoutes = require("./userRoutes")

router.get('/', function(req,res){

    res.status(200).json("masuk ke index routes")

})

router.use("/users", userRoutes)



module.exports=router
