const mongoose = require('mongoose')

const connectToDataBase = async ()=>{
    await mongoose.connect(`mongodb+srv://${process.env.MONGODP_USERNAME}:${process.env.MONGODP_PASSWORD}@cluster0.hbhtm3c.mongodb.net/?retryWrites=true&w=majority`,
     (error)=>{
        if(error){
            return console.log('Apresentou um erro', error)
        }

        return console.log('Servidor conectado!!')
     })
}

module.exports = connectToDataBase