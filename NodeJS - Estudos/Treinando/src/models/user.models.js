const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    sobrenome: {
        type: String,
        require: true
    },
    cargo: {
        type: String,
        require: true
    },
    userName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true,
        minLength: 7,
    }
})

const ModelUser = mongoose.model('User', userSchema)

module.exports = ModelUser
