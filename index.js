var express = require("express");
const app = express();
const handlebars = require('express-handlebars')

//config
    //conexão com banco de dados MySQL
    const Sequelize = require("sequelize")
    const sequelize = new Sequelize('registersystem', 'root', 'Ytwx7ghZZ', {
        host: 'localhost',
        dialect: 'mysql'
    });

    // Definimos então o handleBars como template engine e que o layout padrão será o main, criado em ./views/layouts/main.handlebars
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')




app.listen(8081, function () {
    console.log('Servidor rodando...http://127.0.0.1:8081')
})

