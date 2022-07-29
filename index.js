import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import routes from './src/routes/crmRoutes'

const app = express()
const cors = require('cors')
const PORT = 3000

// connection mongoose
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/CRMdb', {
  useNewUrlParser: true
})

// bodyparser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(express.static('public'))

app.use(cors({ origin: 'http://localhost:8080', credentials: true, methods: 'GET,PUT,POST,DELETE', allowedHeaders: 'Content-Type,Authorization' }))

// app.options('/*', function (req, res) {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header('Access-Control-Allow-Headers', '*')
//   res.header('Access-Control-Allow-Methods: *')
//   res.end()
// })

routes(app)

app.get('/', (req, res) =>
  res.send(`Serveur node et express sur port ${PORT}`)
)

app.listen(PORT, () =>
  console.log(`Votre serveur est sur le port ${PORT}`)
)
