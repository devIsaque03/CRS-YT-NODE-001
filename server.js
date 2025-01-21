import express from 'express' // importando o módulo 'express'

const app = express(); // Chamando função express()
app.use(express.json()) // Faz express poder ler .json

const user = []

// Define uma rota HTTP POST e chama função fornecida
app.post('/users', (req, res) => {

    // Adicionando os dados enviados na requisição ao array user.
    user.push(req.body)

    // Escreve os dados enviados e confirma o envio
    // console.log(req.body);
    // res.send('Ok, post')
    res.status(201).json(req.body)
})

// Fazendo uma requisição no servidor
app.get('/users', (req, res) => {


    // Resposta do servidor
    // res.json(user)
    res.status(200).json(user)
})

// Criando a porta do servidor
app.listen(3000)











/** Sumário:
 * 
 * import express from 'express'
 * 
 * Essa linha importa o módulo express para dentro do seu arquivo 
 * JavaScript. O express é uma framework minimalista e flexível para o 
 * Node.js, usada para construir aplicativos web e APIs de forma rápida e 
 * fácil.
 * 
 * 
 * const app = express ();
 * 
 * Nesta linha, a função express() é chamada e o resultado é armazenado 
 * na constante app. Essa constante agora representa o servidor Express, 
 * e com ela, você poderá configurar rotas, middlewares, e outras 
 * funcionalidades para o seu aplicativo web.
 * 
 * 
 * Métodos HTTP
 * 
 * GET - vários
 * POST - Criar
 * PUT - Editar vários
 * PATCH - Editar um
 * DELETE - Deletar
 * 
 * 
 * HTTP Status
 * 
 * 2xx - Sucessp
 * 4xx - Erro Cliente
 * 5xx - Erro servidor
 */



