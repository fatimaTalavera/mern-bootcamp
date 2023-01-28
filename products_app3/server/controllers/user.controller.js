const User = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET_KEY

module.exports = {

    signupUser: async (req, res) => {
        try {
            const newUser = await User.create(req.body)
            const userToken = jwt.sign({ _id: newUser._id }, SECRET)
            res.status(201).cookie('userToken', userToken, { httpOnly: true, expires: new Date(Date.now() + 90000) })
                .json({ successMessage: 'Registered user', user: newUser })
        } catch (error) {
            res.status(401).json(error)
        }
    },

    loginUser: async (req, res) => {
        const user = await User.findOne({ email: req.body.email })
        if (!user) {
            res.status(400).json({ error: "Invalid Email or Password" })
        } else {
            bcrypt
                .compare(req.body.password, user.password)
                .then(passwordIsValid => {
                    if (passwordIsValid) {
                        const userToken = jwt.sign({_id: user._id}, SECRET)
                        res.status(201)
                            .cookie('userToken', userToken, {httpOnly:true, expires:new Date(Date.now() + 90000)})
                            .json({ msg: "success!" })
                    } else {
                        res.json({ msg: "Invalid Email or Password" });
                    }
                })
                .catch(err => res.json({ msg: "invalid login attempt" }));
        }
    },
    logoutUser: (req, res) => {
        res.clearCookie('userToken')
        res.json({ success: 'User logged out' })
    }

}