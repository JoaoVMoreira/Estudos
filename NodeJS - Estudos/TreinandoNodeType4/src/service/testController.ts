interface ITestService{
    nome: String,
    tipo: String,
    nature: String
}

class TestService{
    async execute({nome, tipo, nature}:ITestService){
        return{nome: nome}
    }
}

export { TestService }