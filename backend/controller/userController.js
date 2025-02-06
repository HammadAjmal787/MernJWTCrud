const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs")
const asyncHandler = require('express-async-handler')
const User = require('../model/userModel') 
require('dotenv').config();

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })

    if(user && (await bcrypt.compare(password, user.password))){
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error("Invalid credentials")
    }
})

const getMe = asyncHandler(async (req, res) => {
    const {_id, name, email } =await User.findById(req.user.id)
    res.status(200).json({
        id:_id,
        name,
        email

    })
    // res.json({ message: "User Displayed" })
})

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body 

    if(!name || !email || !password){
        res.status(400)
        throw new Error("Please provide required details")
    }

    const userExists = await User.findOne({ email })

    if(userExists){
        res.status(400)
        throw new Error("User already exists")
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
        name,
        email,
        password: hashedPassword  
    })

    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    }
     else {
        res.status(400)
        throw new Error("Invalid user")
    }
})

const generateToken = (userId) => {
    // Check if JWT_SECRET is defined
    if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET is not defined");
    }

    // Sign the token with the user ID and JWT_SECRET
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
        expiresIn: "30d", // Token expires in 30 days
    });
};
module.exports = {
    registerUser,
    loginUser,
    getMe
}
