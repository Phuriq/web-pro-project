import bodyParser from 'body-parser'
import express from 'express'
import cors from 'cors'

import user from './src/user.js'
import movie from './src/movie.js'
import resev from './src/reservation.js'
import thea from './src/theater.js'
import round from './src/round.js'
import seat from './src/seat.js'

const app = express()
const router = express.Router()

app.use(cors({ origin: '*' }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(
  '/api',
  router.use('/user', user),
  router.use('/movie', movie),
  router.use('/resev', resev),
  router.use('/theater', thea),
  router.use('/rou', round),
  router.use('/seat', seat)
)

app.listen(8080, () => {
  console.log(`Example app listening at http://localhost:8080`)
})
