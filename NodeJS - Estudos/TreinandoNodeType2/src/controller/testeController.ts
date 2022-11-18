import { Request, Response } from "express";
import { UserService } from '../service/testeService'


class UserController{
    async handle(req: Request, res:Response){
        const {nome, descricao, preco, categoria} = req.body

        const userService = new UserService()
        const user = await userService.execute({nome, categoria, descricao, preco})
        
        return res.json(user)
    }
}

export{UserController}