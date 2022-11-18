const { default: mongoose } = require("mongoose");

const SchemaUser = new mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    sobrenome: {
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    senha:{
        type: String,
        require: true,
        minlenght: 7
    }
})

const modelUser = mongoose.model('user', SchemaUser)

module.exports = modelUser