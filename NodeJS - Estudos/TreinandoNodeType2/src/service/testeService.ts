import prismaClient from '../prisma/index'
interface IUserService{
    nome: string,
    descricao: string,
    preco: number,
    categoria: string
}

class UserService{
    async execute({ nome, categoria, descricao, preco }:IUserService){
        if(!nome || !descricao || !preco || !categoria){
            throw new Error('Favor informar o nome do produto')
        }

        const jaCadastrado = await prismaClient.produtos.findFirst({
            where: {
                nome: nome
            }
        })

        if(jaCadastrado){
            throw new Error('Produto ja cadastrado')
        }

        const product = await prismaClient.produtos.create({
            data: {
                nome: nome,
                descricao: descricao,
                preco: preco,
                categoria: categoria
            }
        })
        return {product} 
    }
}

export { UserService }