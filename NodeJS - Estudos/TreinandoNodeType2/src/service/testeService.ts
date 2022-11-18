interface IUserService{
    nome: String,
    descricao: String,
    preco: Number,
    categoria: String
}

class UserService{
    async execute({ nome, categoria, descricao, preco }:IUserService){
        return {nome: nome} 
    }
}

export { UserService }