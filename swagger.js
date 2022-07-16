const swagger_autogen = require("swagger-autogen")()

const doc = {
    info:{
        title: "Inventory-app API",
        description: "An Inventory management website which provides basic CRUD operations."
    },
    host: 'inventoryapp-backend.herokuapp.com',
    scheme:['https']
}

const outputfile = 'swagger.json'
const endpoints = ['./routers/*.js']

swagger_autogen(outputfile,endpoints,doc)