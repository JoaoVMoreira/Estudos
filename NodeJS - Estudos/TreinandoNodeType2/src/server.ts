import express from "express";
import { rota } from "./routes";

const app = express()
app.use(express.json())
app.use(rota)

const porta = 8080
app.listen(porta, ()=>console.log(`Servidor rodando na porta ${porta}`))