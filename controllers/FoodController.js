const axios = require("axios")


class FoodController {

    static recipe(req, res, next) {

        const app_key = "7ff915397764ced677d027d02bb647de"
        const app_id = "a2c7b8b0"

        let food = req.params.id

        axios({
            url: `https://api.edamam.com/search?q=${food}&app_id=${app_id}&app_key=${app_key}&from=0&to=4`,
            method: "POST",
        })
            .then(response => {

                let alldata = response.data.hits
                let foodsInfo = []
               
                for (let data of alldata) {

                    let label = data.recipe.label
                    let image = data.recipe.image
                    let ingredient = data.recipe.ingredientLines
                    let eachFood = {label,image,ingredient}
                    
                    foodsInfo.push(eachFood)
                }
                if (foodsInfo.length===0){
                    next({status:404, message:"data not found"})
                }
                else{
                    res.status(200).json({foodsInfo})

                }
            })
            .catch(next)

    }

    static nutrition(req, res, next) {

        const app_id = "097bd7fa"
        const app_key = "7a5aaaba187ec7777d65962096db95a8"

        let ingredient = req.body.ingredient
 
        axios({
            url: `https://api.edamam.com/api/nutrition-details?app_id=${app_id}&app_key=${app_key}`,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            data: {
                ingredient
            }
        })
            .then(response => {
                res.status(200).json(response.data)
            })
            .catch(next)

    }


}

module.exports = FoodController
