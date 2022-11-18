import express from 'express';
import { rotas } from './rotas';


const app = express()

app.use(express.json())
app.use(rotas)

const port = 3333
app.listen(port, ()=> console.log(`Servidor rodando na porta ${port}`))