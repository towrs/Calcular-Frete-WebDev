//importando os modulos das dependencias
const express = require("express"); 
const cors = require("cors");

//criando a instância da aplicação express
const app = express();

//DEFININDO A PORTA DA APLICAÇÃO QUE IRÁ EXECUTAR
const port =5001;

//CONFIGURAR O EXPRESS PARA REQUISIÇÕES EM JSON
app.use(express.json());

//HABILITA O CORS PARA ACEITAR AS REQUISIÇÕES DA APLICAÇÃO
app.use(cors());

//TABELA DE PREÇOS
const precos={
    bicicleta: 0.80,
    carro: 0.95,
    drone: 1.20
}

//CRIANDO A ROTA DA APLICAÇÃO
app.post("/calcularfrete",(req,res)=>{
    //desestruturação para extrair as variáveis da aplicação
    const{distancia,tipoTransporte} =req.body;

    if(distancia === undefined || tipoTransporte ===undefined)
        return res.status(400).json({error:"distância e transporte obrigatórios"})
})

const precoporKM = precos[tipoTransporte.toLowerCase()];
if(distancia === undefined || tipoTransporte ===undefined)
        return res.status(400).json({error:"Tipo de  transporte inválido"})

//CALCULAR O VALOR TOTAL NO FRETE
const valorTotal = distancia * precoporKM;
res.json({valorTotal: valorTotal.toFixed(2)}) //ARREDONDA DUAS CASAS

app.listen(port,()=>{
    console.log(`Servidor rodando na porta ${port}`)
})