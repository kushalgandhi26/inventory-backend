const swagger_autogen = require("swagger-autogen")()

const doc = {
    info:{
        title: "MY API",
        description: "dfs"
    },
    host: 'localhost:5000',
    schemes: ['http']
}

const outputfile = 'swagger.json'
const endpoints = ['./routers/*.js']

swagger_autogen(outputfile,endpoints,doc)