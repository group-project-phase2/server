const express = require("express")
const router = express.Router()
const FoodController =  require('../controllers/FoodController')
const authentication = require('../middleware/authentication')


router.get("/recipe", authentication, FoodController.recipe)


module.exports = router
