import { useEffect, useState } from "react"
import product from "../../server/config"

export default function Home() {

  const [nome, setNome] = useState('')
  const [descricao, setDescricao] = useState('')
  const [categoria, setNomeCategoria] = useState('')
  const [preco, setPreco] = useState('')

  const getDados = async () => {
    try{
      const nome = product.get('/teste')

      console.log(nome)
    }catch(error){
      console.log(error)
    }
  }
  
  useEffect(()=>{
    getDados()
  }, [])

  async function handleSend(){

    await product.post('/teste', {
      nome: nome, 
      descricao: descricao,
      categoria: categoria,
      preco: preco
    })

    console.log('Deu certo!!!!')
  }


  return (
    <div>
      <h1>Produtos</h1>
      <input placeholder="Nome" value={nome} onChange={(e)=> setNome(e.target.value)}/>
      <input placeholder="Descrição" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
      <input placeholder="Categoria" value={categoria} onChange={(e) => setNomeCategoria(e.target.value)} />
      <input placeholder="Preço" value={preco} onChange={(e) => setPreco(e.target.value)} />
      <button onClick={handleSend}>Cadastrar</button>
    </div>
  )
}
