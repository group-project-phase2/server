const axios=require("axios")
const app_key = "7ff915397764ced677d027d02bb647de"
const app_id = "a2c7b8b0"

class FoodController{

    static recipe(req, res, next){

        let food = req.body.food

        axios({
            url : `https://api.edamam.com/search?q=${food}&app_id=${app_id}&app_key=${app_key}&from=0&to=4`,
            method : "POST",
        })
        .then(response=>{
            
            let alldata = response.data.hits
            let foodLabels = []
            let foodImages = []
            let foodIngredients = []
            for (let data of alldata){

            let label = data.recipe.label
            let image = data.recipe.image
            let ingredient = data.recipe.ingredientLines
            
            foodLabels.push(label)
            foodImages.push(image)
            foodIngredients.push(ingredient)
            }
            // console.log(response.data.hits)
            res.status(200).json({foodLabels,foodImages,foodIngredients})
        })
        .catch(next)
    
    }


}

module.exports = FoodController
