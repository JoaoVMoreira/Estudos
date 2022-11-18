import prismaclient from "../prisma"

interface IUserService {
    nome: string;
    idade: number;
    email: string;
}

class userService{
    async execute({nome, idade, email}:IUserService){

        if (!email){
            throw new Error('E-mail não informado!')
        }

        const jaInformado = await prismaclient.user.findFirst({
            where:{
                email: email
            }
        })

        if(jaInformado){
            throw new Error('E-mail já informado!')  
        }

        const user = await prismaclient.user.create({
            data: {
                nome: nome,
                idade: idade,
                email: email,

            }
        })
        return {user}
    }
}

export { userService }