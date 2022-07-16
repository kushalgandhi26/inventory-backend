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

const run = async() => {
    await User.sync()
}

(function(){
    run()
})();

User.loginUser = async (req, res) => {
    try {
        const { username, phonenumber } = req.body
        const validNumber = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/
        if(validNumber.test(phonenumber)){
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
        }else{
            return res.status(400).json({messege: "Invalid phone number"})
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({messege: "Internal Server Error"})
    }
}

module.exports = User