//importa os módulos http e express
const http = require('http');
const express = require('express');
//constrói um objeto express
const app = express();
//importa o body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
//configura a porta do servidor e o coloca em execução.
const porta = 3000;
app.set('port', porta);
const server = http.createServer(app);
server.listen(3000);

let id = 2;

let livros = [{
        id: 1,
        titulo: "Lógica de programação",
        descricao: "Este livro ajudará os alunos com o conceito da lógica",
        edicao: "3",
        autor: "Hamilton Machiti da Costa",
        isbm: "798321"
    },
    {
        id: 2,
        titulo: "Programação web",
        descricao: "Este livro ajudará os alunos com o conceito de web",
        edicao: "2",
        autor: "Arthur de Lima Costa",
        isbm: "123456"
    }
];

app.get("/livros", (req,res,next) =>{
    res.status(201).json(livros);
})

app.post("/livros", (req,res,next) => {
    const livro = {
        id: id += 1,
        titulo: req.body.titulo,
        descricao: req.body.descricao,
        edicao: req.body.edicao,
        autor: req.body.autor,
        isbm: req.body.isbm
    }
    livros.push(livro)
    res.status(201).json(livros);
})

app.put("/livros",(req,res,next) => {
    livros.forEach((livro) =>{
        if(livro.id === req.body.id){
            livro.titulo = req.body.titulo,
            livro.descricao = req.body.descricao,
            livro.edicao = req.body.edicao,
            livro.autor = req.body.autor,
            livro.isbm = req.body.isbm
        }
    })
    res.status(200).json(livros);
})

app.delete('/livros/:id',(req,res,next) =>{
    const idLivroDeletado = req.params.id;
    livros.forEach((livro,index) =>{
        if (livro.id == idLivroDeletado) livros.splice (index,1)
    })
    res.status(200).json(livros);
})

app.delete("/livros",(req,res,next) =>{
    livros.forEach(livro =>{
        if(livro.id === req.body.id)
        {
            const index = livros.indexOf(livro, 0)
            livros.splice(index, 1)
        }
    })
    res.status(200).json(livros);
})

//código feito antes da correção:
/*//importa os módulos http e express
const http = require('http');
const express = require('express');
//constrói um objeto express
const app = express();
//importa o body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
//configura a porta do servidor e o coloca em execução.
const porta = 3000;
app.set('port', porta);
const server = http.createServer(app);
server.listen(3000);
let id = 2;
let livros = [{
        id: 1,
        titulo: "Memórias póstumas de Bras Cubas",
        descricao: "Vida e morte na literatura",
        edicao: " Tipografia Nacional",
        autor: "Machado de Assis",
        isbm: "9788560125180"
    },
    {
        id: 2,
        titulo: "O Cortiço",
        descricao: "O Cortiço é um romance naturalista do brasileiro Aluísio Azevedo publicado em 1890 que denuncia a exploração e as péssimas condições de vida dos moradores das estalagens ou dos cortiços cariocas do final do século XIX.",
        edicao: "B. L. Garnier",
        autor: "Aluísio Azevedos",
        isbm: "9780850515015"
    }
];
let livros2 = [];
//tratamento de requisições POST
app.post("/livros", (req, res, next) => {
    const livro = {
        id: id += 1,
        titulo: req.body.titulo,
        descricao: req.body.descricao,
        edicao: req.body.edicao,
        autor: req.body.autor,
        isbm: req.body.isbm
    }
    livros.push(livro)
    res.status(201).json(livro);
});
//tratamento de requisições GET
app.get("/livros", (req, res, next) => {
    res.status(200).json(livros);
})

mento de requisições PUT
app.put("/livros", (req, res, next) => {
    livros.forEach((livro) => {
        if (livro.id === req.body.id) {
            livro.titulo = req.body.titulo;
            livro.descricao = req.body.descricao;
            livro.edicao = req.body.edicao;
            livro.autor = req.body.autor;
            livro.isbm = req.body.isbm;
        }
        
    })
    res.status(204).end();
});


''
//tratamento de requisições DELETE
app.delete('/livros/:id', (req, res, next) =>{
    const idLivrosDeletado = req.params.id;
    livros.forEach((livro, index) => {
        if(livro.id == idLivrosDeletado) livros.splice(index, 1)  
    }) 
    res.status(200).json(livros); 
});*/