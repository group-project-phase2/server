// require("dotenv").config
const User = require("../models/User")
const { OAuth2Client } = require('google-auth-library');
const Secret=process.env.JWT_SECRET
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
const client = new OAuth2Client(GOOGLE_CLIENT_ID);
const jwt = require('jsonwebtoken')
const {checkPassword} = require('../helpers/encryptPass')

class UserControlller{
    
    static register(req, res, next){

        const {username, email, password} = req.body

        User.create({username,email,password})
        .then(result=>{
            res.status(201).json(result)
        })
        .catch(next)

    }

    static login(req, res, next){

        const {email, password} = req.body

        User.findOne({email})
        .then(user=>{

            if (!user){

                next({status:404, message:"you havent registered"})

            }
            else if (checkPassword(password, user.password)) {

                let userdata = {
                    'username' : user.username,
                    'id' : user._id,
                    'email' : user.email 
                }

                let token = jwt.sign(userdata,Secret)
                res.status(200).json({token})
            }

            else {
                next({status:400, message : "email/password not found"})
            }
        })
        .catch(next)

    }


    static Gsignin(req, res, next){

        client.verifyIdToken({
            idToken : req.body.idToken,
            audience : GOOGLE_CLIENT_ID
        })
        .then(ticket=>{

            const {email,name } = ticket.getPayload()

            User.findOne({email})
            .then(user=>{

                if (!user){

                    return User.create({
                        "username" : name,
                        "email" : email,
                        "password" : "tameImpala"
                    })
                }
                else{
                    return user
                }
            })
            .then(user=>{

                let userdata = {
                    "username" : user.username,
                    "id" : user._id,
                    "email" : user.email
                }

                let token = jwt.sign(userdata,Secret)
                res.status(200).json({token})
            })
            .catch(next)
        })
        .catch(next)
    }

}

module.exports = UserControlller






