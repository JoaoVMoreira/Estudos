const mongoose = require('mongoose')

const connectToDataBase = async()=>{
    await mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@projeto1.snbmj6h.mongodb.net/?retryWrites=true&w=majority`, (error)=>{
        if(error){
            return console.log(error)
        }

        return console.log('Conecção realizada')
    })
}

module.exports = connectToDataBase