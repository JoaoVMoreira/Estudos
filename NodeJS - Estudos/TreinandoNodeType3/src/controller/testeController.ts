import {Request, Response} from 'express'
import { TesteService } from '../service/testeService'


class TesteController{
    async handle(req: Request, res: Response){
        const {nome, descricao, categoria, preco} = req.body
        const testeService = new TesteService()
        const user = await testeService.execute({nome, descricao, categoria, preco})

        return res.json(user)
    }
}

export { TesteController }