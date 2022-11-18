const express = require('express')
const modelUser = require('../src/models/user.model')
const app = express()

app.use(express.json())

app.post('/user', async (req, res)=> {
    try{
        const user = await modelUser.create(req.body)

        res.status(200).json(user)
    }catch(error){
        return res.status(500).send(error.message)
    }
})

app.get('/user', async(req, res)=>{
    try{
        const user = await modelUser.find({})
        res.status(201).json(user)
    }catch(error){
        return res.status(500).send(error.message)
    }
})

app.delete('/user/:id', async(req, res)=>{
    try{
        const id = req.params.id
        const user = await modelUser.findByIdAndRemove(id)

        res.status(200).json(user)
    }catch(error){
        return res.status(500).send(error.message)
    }
})

const port = 4002
app.listen(port, ()=> console.log(`Servidor iniciado na porta ${port}`))