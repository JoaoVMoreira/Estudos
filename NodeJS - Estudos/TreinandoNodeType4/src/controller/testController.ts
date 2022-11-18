import { Request, Response } from "express";
import { TestService } from "../service/testController";

class TestController{
    async handle(req: Request, res: Response){
        const {nome, tipo, nature} = req.body
        const testService = new TestService()
        const user = await testService.execute({nome, tipo, nature})

        return res.json(user)
    }
}

export { TestController }