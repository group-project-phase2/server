const express = require("express")
const router = express.Router()
const FoodController =  require('../controllers/FoodController')
const authentication = require('../middleware/authentication')


router.use(authentication)

router.get("/recipe/:id", FoodController.recipe)
router.post("/nutrition", FoodController.nutrition)

module.exports = router
