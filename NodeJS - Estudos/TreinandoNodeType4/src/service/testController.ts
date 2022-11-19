import prismaClient from "../prisma/index"
interface ITestService{
    nome: string,
    tipo: string,
    nature: string
}

class TestService{
    async execute({nome, tipo, nature}:ITestService){
        if(!nome || !tipo || !nature){
            throw new Error("Todos os itens devem ser preenchidos")
        }

        const jaInformado = await prismaClient.pokemon.findFirst({
            where:{
                nome: nome
            }
        })

        if(jaInformado){
            throw new Error('Pokemon já cadastrado')
        }

        const pokemon = await prismaClient.pokemon.create({
            data: {
                nome: nome,
                tipo: tipo,
                nature: nature
            }
        })
        return { pokemon }
    }
}

export { TestService }