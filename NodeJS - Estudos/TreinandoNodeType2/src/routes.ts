import { Router } from "express";
import { UserController } from "./controller/testeController";

const rota = Router()

rota.post("/user", new UserController().handle)

export {rota}