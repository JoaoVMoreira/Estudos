import { Router } from "express";
import { TestController } from "./controller/testController";

const rotas = Router()

rotas.post('/test', new TestController().handle)

export {rotas}