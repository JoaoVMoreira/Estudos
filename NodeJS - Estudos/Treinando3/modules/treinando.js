const userModule = require('../src/models/user.module')
const express = require("express")

const app = express()
app.use(express.json())

app.post('/user', async(req, res)=>{
    try{
        const user = await userModule.create(req.body)

        res.status(201).json(user)
    }catch(error){
        return res.status(500).send(error.message)
    }
})

app.get('/user', async(req, res)=>{
    try{
        const user = await userModule.find({})

        res.status(201).json(user)
    }catch(erro){
        return res.status(500).send(error.message)
    }
})

app.delete('/user/:id',async(req, res)=>{
    try{
        const id = req.params.id
        const user = await userModule.findByIdAndRemove(id)
        
        res.status(201).json(user)
    }catch(error){
        return res.status(500).send(error.message)
    }
})

const port = 8080
app.listen(port, () => console.log('Servidor rodando!!'))