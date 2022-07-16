const swagger_autogen = require("swagger-autogen")()

const doc = {
    info:{
        title: "MY API",
        description: "dfs"
    },
    host: 'https://inventoryapp-backend.herokuapp.com'
}

const outputfile = 'swagger.json'
const endpoints = ['./routers/*.js']

swagger_autogen(outputfile,endpoints,doc)