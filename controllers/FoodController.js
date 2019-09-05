const axios=require("axios")
const app_key = "7ff915397764ced677d027d02bb647de"
const app_id = "a2c7b8b0"

class FoodController{

    static recipe(req, res, next){

        let food = req.body.food

        axios({
            url : `https://api.edamam.com/search?q=${food}&app_id=${app_id}&app_key=${app_key}&from=0&to=1`,
            method : "POST",
        })
        .then(response=>{
            // let foodlabel = response.data.hits.label
            let recipe = response.data.hits[0].recipe
            let foodlabel = recipe.label
            let foodImage = recipe.image
            let foodIngredients = recipe.ingredientLines
            // console.log(hits[0])
            res.status(200).json({foodlabel, foodImage, foodIngredients})
        })
        .catch(next)
    
    }


}

module.exports = FoodController
