const Sequelize = require('sequelize');
const database = require("../db");
const jwt = require("jsonwebtoken")

const User = database.define(
    "users",
    {
        username: {
            type: Sequelize.TEXT
        },
        phonenumber: {
            type: Sequelize.TEXT,
            primaryKey: true
        }
    },
    { timestamps: false }
)

User.loginUser = async (req, res) => {
    try {
        const { username, phonenumber } = req.body
        const user = await User.findOne({
            where: {
                phonenumber: phonenumber
            }
        })
        if (user == null) {
            const newUser = await User.create({ username, phonenumber })
            const token = jwt.sign(
                { userId: phonenumber },
                process.env.TOKEN_KEY
            );
            return res.status(200).json({jwt:token,user:newUser.username})
        }else{
            const token = jwt.sign(
                { userId: user.phonenumber },
                process.env.TOKEN_KEY
            );
            return res.status(200).json({jwt:token,user:user.username})
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({messege: "Internal Server Error"})
    }
}

User.getUsers = async (req, res) => {
    try {
        const users = await User.findAll()
        res.json(users)
    } catch (error) {
        console.error(error)
    }
}

module.exports = User