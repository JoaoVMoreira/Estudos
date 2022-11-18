const connectToDataBase = require('./src/database/connection')
const dotenv = require('dotenv')


dotenv.config()
connectToDataBase()

require('./modules/criaUser')