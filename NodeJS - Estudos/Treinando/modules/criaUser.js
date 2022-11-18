const express = require('express')
const ModelUser = require('../src/models/user.models')

const app = express()

app.use(express.json())

app.post('/signup', async (req, res) => {
    try{
        const user = await ModelUser.create(req.body)

        res.status(201).json(user)

    }catch (error){
        return res.status(500).send(error.message)
    }
    
})

app.get('/signup', async (req, res) => {
    try{
        const user = await ModelUser.find({})

        res.status(201).json(user)
    }catch (error){
        return res.status(500).send(error.message)
    }
})

app.delete('/signup/:id', async (req, res) => {
    try{
        const id = req.params.id
        const user = await ModelUser.findByIdAndRemove(id)

        res.status(201).json(user)
    }catch (error){
        return res.status(500).send(error.message)
    }
})

app.patch('/signup/:id', async (req, res) => {
    try{
        const id = req.params.id
        const user = await ModelUser.findByIdAndUpdate(id, req.body, { new: true })

        res.status(201).json(user)
    }catch (error){
        return res.status(500).send(error.message)
    }
})
const port = 8080
app.listen(port, ()=> console.log(`Servidor iniciado na porta ${port}`))