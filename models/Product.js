const Sequelize = require('sequelize');
const database = require("../db");

const Product = database.define(
    "products",
    {
        title: {
            type: Sequelize.TEXT
        },
        image: {
            type: Sequelize.TEXT,
            defaultValue:"https://media.istockphoto.com/vectors/default-image-icon-vector-missing-picture-page-for-website-design-or-vector-id1357365823?k=20&m=1357365823&s=612x612&w=0&h=ZH0MQpeUoSHM3G2AWzc8KkGYRg4uP_kuu0Za8GFxdFc="
        },
        createduser: {
            type: Sequelize.TEXT
        },
        id: {
            type: Sequelize.BIGINT,
            autoIncrement: true,
            primaryKey: true
        }
    },
    { timestamps: false }
)

const run = async() => {
    await Product.sync()
}

(function(){
    run()
})();

Product.getProduct = async (req, res) => {
    try {
        const product = await Product.findOne({
            where: {
                id: req.params.id
            }
        })
        if(product)
            return res.status(200).json(product)
        res.json({messege: "Invalid Request"})
    } catch (error) {
        console.error(error)
    }
}

Product.getProducts = async (req, res) => {
    try {
        const products = await Product.findAll()
        res.status(200).json(products)
    } catch (error) {
        console.error(error)
    }
}

Product.createProduct = async (req, res) => {
    try {
        const { title, image, createduser } = req.body
        const product = await Product.create({ title, image, createduser })
        res.status(200).json(product)
    } catch (error) {
        console.error(error)
    }
}

Product.updateProduct = async (req, res) => {
    try {
        const product = await Product.findOne({
            where: {
                id: req.params.id
            }
        })
        if (product) {
            const { title, image } = req.body
            const updatedProduct = await Product.update({
                title: title,
                image: image
            },
                {
                    where: {
                        id: req.params.id
                    }
                })
            res.status(200).json({ messege: "Update Successfully" })
        }
        return res.json({messege: "Invalid Request"})
    } catch (error) {
        console.error(error)
    }
}

Product.deleteProduct = async (req, res) => {
    try {
        await Product.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json({ messege: "Delete Successfully" })
    } catch (error) {
        console.error(error)
    }
}

module.exports = Product