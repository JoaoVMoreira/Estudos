import express from "express"; //Exportando express
import { rotas } from "./routes";


const app = express()
app.use(express.json())

app.use(rotas)

const port = 3333
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))