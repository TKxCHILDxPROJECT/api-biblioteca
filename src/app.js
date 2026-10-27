import express from "express";

const app = express();
const livros = [

    {
        id:1,
        titulo: "programando em JAVA"
    },
    
    {
         id:2,
        titulo: "programando em JS"
    }
]

app.get("/", (req, res) =>{
    res.status(200).send("Olá Mundo");
});

app.get("/livros",(req, res) =>{
   res.status(200).json(livros); 
});

export default app;