import { Router } from "express";
import { TesteController } from "./controller/testeController";

const rotas = Router()

rotas.post('/teste', new TesteController().handle)


export {rotas}