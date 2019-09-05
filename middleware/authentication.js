const jwt = require("jsonwebtoken")
const secret = process.env.JWT_SECRET
const User = require("../models/User")

function authentication(req, res, next){

    try {

        const token = req.headers.token
        const decode = jwt.verify(token, secret)

        req.decode = decode
        let id = req.decode.id

        User.findById(id)
        .then(theuser=>{
          
            if (theuser){
                next()
            }

            else {
                next({status : 401, message : "You are not authenticated user"})

            }
        })
        .catch(next)


    }
    catch{
        next({status:401, message: "You are not authenticated user"})
    }

}

module.exports = authentication
