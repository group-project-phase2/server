const express = require('express')
const router = express.Router()
const userRoutes = require("./userRoutes")
const foodRoutes = require('./foodRoutes')
router.get('/', function(req,res){

    res.status(200).json("masuk ke index routes")

})


router.use("/users", userRoutes)
router.use("/foods", foodRoutes)


module.exports=router
