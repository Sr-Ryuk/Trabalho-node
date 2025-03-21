const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.get('/', (req, res) => {

    res.sendFile(path.join(__dirname, 'inicial.html'))
})

app.post('/', (req,res) =>{
    res.send('Olá post')
})

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html')) // Envia o arquivo index.html
})

app.listen(port, () => {
    console.log(`Aplicação exemplo rodando em http://localhost:${port}`)
})
