import prismaClient from "../prisma/index"
interface ITesteService{
    nome: string,
    descricao: string,
    categoria: string,
    preco: string
}

class TesteService{
    async execute({nome, descricao, categoria, preco}:ITesteService){
        if(!nome || !descricao || !categoria || !preco){
            throw new Error('Favor informar todos os dados')
        }

        const jaCadastrado = await prismaClient.product.findFirst({
            where: {
                nome: nome
            }
        })

        if(jaCadastrado){
            throw new Error('Produto ja cadastrado!')
        }

        const product = await prismaClient.product.create({
            data: {
                nome: nome,
                descricao: descricao,
                preco: preco,
                categoria: categoria
            }
        })
        return { product }
    }
}

export { TesteService }