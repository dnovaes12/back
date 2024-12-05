import mongoose from 'mongoose'
import * as dotenv from 'dotenv'

dotenv.config()

const mongoURL = process.env.MONGODB_URL || 'mongodb://localhost:27017/sistema-vendas'

mongoose.connect(mongoURL)
mongoose.connection
  .on(
    'error',
    console.error.bind(console, 'Erro ao conectar com o banco de dados'),
  )
  .once('open', () => {
    console.log('Conexão com o banco de dados estabelecida com sucesso')
  })

export default mongoose
