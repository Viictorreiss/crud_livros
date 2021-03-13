const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const porta = 3000;
app.set('port', porta);
const server = http.createServer(app);
server.listen(3000);
let id = 2;
let livros = [{
    id: 1,
    isbn: '978-8598078175',
    titulo: 'Programação em Python',
    descricao: 'Ajudara estudantes a desenvolver habilidades em python',
    edicao: '1ª',
    autor: 'Markus Zusak'
  },
  {
    id: 2,
    isbn: '978-8551002933',
    titulo: 'Fury',
    descricao: 'Conta uma história de guerreiros de um tanke durante a segunda guerra mundial',
    edicao: 'Capa Dura',
    autor: 'C. J. Tudor'
  }
];

let livros2 = [];

app.set('port', porta);
app.get('/livros', (req, res, next) => {
  res.json(livros)
});

app.get("/livros", (req, res, next) => {
  res.status(200).json(livros);
});

app.post('/livros', (req, res, next) => {
  const livro = req.body;
  livros.push({
    id: id += 1,
    isbn: req.body.isbn,
    titulo: req.body.titulo,
    descricao: req.body.descricao,
    edicao: req.body.edicao,
    autor: req.body.autor
  });
  livros.push(livro);
  res.status(201).json(livro);
});

app.put("/livros", (req, res, next) => {
  livros.forEach((livro) => {
    if (livro.id === req.body.id) {
      livro.isbn = req.body.isbn,
        livro.titulo = req.body.titulo,
        livro.descricao = req.body.descricao,
        livro.edicao = req.body.edicao,
        livro.autor = req.body.autor
    }
  })
  res.status(204).json(livros);
});

app.delete("/livros", (req, res, next) => {
  livros.forEach((livro) => {
    if (livro.id != req.body.id) {
      const livro2 = {
        id: livro.id,
        isbn: livro.isbn,
        titulo: livro.titulo,
        descricao: livro.descricao,
        edicao: livro.edicao,
        autor: livro.autor
      }
      livros2.push(livro2)
    }
  })
  livros = livros2;
  
  res.status(204).json(livros);
});