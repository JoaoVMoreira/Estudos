import express from 'express';
import { rotas } from './rotas';
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())
app.use(rotas)

const port = 3333
app.listen(port, ()=> console.log(`Servidor rodando na porta ${port}`))