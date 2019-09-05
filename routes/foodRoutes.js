const express = require("express")
const router = express.Router()
const FoodController =  require('../controllers/FoodController')

router.get("/recipe", FoodController.recipe)


module.exports = router
