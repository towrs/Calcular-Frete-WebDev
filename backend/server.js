//importando os modulos das dependencias
const express = require("express"); 
const cors = require("cors");

//criando a instância da aplicação express
const app = express();

//DEFININDO A PORTA DA APLICAÇÃO QUE IRÁ EXECUTAR
const port =5001;


app.listen(port,()=>{
    console.log(`Servidor rodando na porta ${port}`)
})