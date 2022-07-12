const Sequelize = require('sequelize');
const database = require("../db");

const Product = database.define(
    "products",
    {
        title: {
            type: Sequelize.TEXT
        },
        image: {
            type: Sequelize.TEXT
        },
        createduser:{
            type: Sequelize.TEXT
        },
        id:{
            type: Sequelize.BIGINT,
            autoIncrement: true,
            primaryKey: true
        }
    },
    { timestamps: false }  
)

Product.getProduct = async(req,res) => {
    try {
        const product = await Product.findOne({
            where:{
                id:req.params.id
            }
        })
        res.status(200).json(product)
    } catch (error) {
        console.error(error)
    }
}

Product.getProducts = async(req,res) => {
    try {
        const products = await Product.findAll()
        res.status(200).json(products)
    } catch (error) {
        console.error(error)
    }
}

Product.createProduct = async(req,res) => {
    try {
        const {title,image,createduser,id} = req.body
        const product = await Product.create({title,image,createduser,id})
        res.status(200).json(product) 
    } catch (error) {
        console.error(error)
    }
}

Product.updateProduct = async(req,res) => {
    try {
        
    } catch (error) {
        console.error(error)
    }
}

Product.deleteProduct = async(req,res) => {
    try {
        await Product.destroy({
            where:{
                id: req.params.id
            }
        })
        res.json({messege:"Delete Successfully"})
    } catch (error) {
        console.error(error)
    }
}

module.exports = Product