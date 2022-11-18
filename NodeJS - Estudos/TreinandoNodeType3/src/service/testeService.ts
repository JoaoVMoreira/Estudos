interface ITesteService{
    nome: String,
    descricao: String,
    categoria: String,
    preco: Number
}

class TesteService{
    async execute({nome, descricao, categoria, preco}:ITesteService){
        return {ok:true}
    }
}

export { TesteService }