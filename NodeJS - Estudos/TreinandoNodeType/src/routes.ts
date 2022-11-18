import { Router } from 'express';
import {UserController} from './controllers/userController';

const rotas = Router()

rotas.post('/user', new UserController().handle)

export { rotas }