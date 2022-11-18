import {Request, Response} from 'express'
import { userService } from '../services/userService'

class UserController{
    async handle(req: Request, res: Response){

        const {nome, idade, email} = req.body

        const service = new userService()

        const user = await service.execute({nome, idade, email})
        return res.json(user)
    }
}

export {UserController}