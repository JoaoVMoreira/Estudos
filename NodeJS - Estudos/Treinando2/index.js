const dotenv = require('dotenv')
const connectToDataBase = require('./src/database/connections')

dotenv.config()
connectToDataBase()

require('./modules/treino2')