const conectToDataBase = require('./src/database/conection')
const dotenv = require('dotenv')

dotenv.config()
conectToDataBase()
require('./modules/treinando')