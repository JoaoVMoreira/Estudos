interface IUserService {
    nome: String,
    idade: Number,
    email: String
}

class userService{
    async execute({nome, idade, email}:IUserService){
        return {ok: true}
    }
}

export { userService }