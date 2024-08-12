const express = require("express");
const mysql = require("mysql2");

const app = express();
app.listen(3000, ()=>{

    console.log("Servidor em Execução");

})

//criação da conexão com o banco de dados

const connection = mysql.createConnection({

    host: 'localhost',
    user: 'user_bd_tasks',
    password: 'QL0P4TDcQGP2R97Djet7vXYHggatTSZE4',
    database: 'nodejs_tasks'

})


connection.connect(error =>{
    if(error)
    {
        console.log('Erro na conexão ao MySql:' +error.message);
        return;
    }
    console.log('Conexão realizada com sucesso');
    
})
  

    
