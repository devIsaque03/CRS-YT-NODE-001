import express from 'express' // importando o módulo 'express'
import { PrismaClient } from '@prisma/client' // importa o servidor

const prisma = new PrismaClient() // Guarda tudo do prima aqui

const app = express(); // Chamando função express()
app.use(express.json()) // Faz express poder ler .json

// const user = []            DELETADO POR FALTA DE USO

// Define uma rota HTTP POST e chama função fornecida
app.post('/users', async (req, res) => {

    // Req.body é por causa da extenção, é a requisição que a extenção faz

    // Adicionando os dados enviados na requisição ao array user.
    // user.push(req.body)

    // Adiciona usuários usando o prima
     await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    }) 

    // Escreve os dados enviados e confirma o envio
    // console.log(req.body);
    // res.send('Ok, post')
    res.status(201).json(req.body)
})

// Fazendo uma requisição no servidor
app.get('/users', async (req, res) => {

    let user = []

    /** Filtro de vai mostrar um usuário ou vários
     *  Query vai o filtro se tiver, caso tenha um nome terá na Query */
    if(req.query) {

        /** Se tiver uma query, compare todos os itens com a query e 
         *  mostre os que estão iguais */
        user = await prisma.user.findMany({
            where: {
                name: req.query.name,
                email: req.query.email,
                age: req.query.age
            }
        })
    } else {

        // Caso não tenha Query (filtro), mostre todos
        user = await prisma.user.findMany()
    }

    // Resposta do servidor
    // res.json(user)
    res.status(200).json(user)
})

// Editando usuários pela "ID" (variável)
app.put('/users/:id', async (req, res) => {

    // Escreve o que foi enviado
    // console.log(req.body)

    // Procura e edita copiando as novas informações
    await prisma.user.update({
        where: { 
            // pega o id da URL
            id: req.params.id
        },
        data: {
            // Copia o que está no req
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    // Resposta do servidor
    res.status(200).json({message: ' edit feito com sucesso! '})
})

// Deletando pela ID
app.delete('/users/:id', async(req, res) => {

    // procura o usuário que tem o ID da URL e o exclui
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })

    // Resposta do servidor
    res.status(200).json({message: ' Usuário deletado com Sucesso! '})
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



