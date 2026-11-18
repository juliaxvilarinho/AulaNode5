import express from 'express';
import CalcularDobro from './calculo.js';
 
const app = express();
const PORTA = 3000;

//Libera o acesso aos arquivo HTML, CSS, E JS dentro da pasta
app.use(express.static('public'))
 
app.listen(PORTA, ()=>{
    console.log(`Projeto rodando em http://localhost:${PORTA}`)
})

app.get('/dobro',(req,res)=>{
    const numeroDoFrontEnd = Number(req.query.valor)
    const resultado =CalcularDobro(numeroDoFrontEnd)
    res.json({
        dobro: resultado,
        numeroEnviado: numeroDoFrontEnd
    })
})