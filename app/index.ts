import express from 'express'
import bodyParser from 'body-parser'

import dotenv from 'dotenv'
dotenv.config()

import cors from 'cors'

Promise = require('bluebird')

import routes from './routes/notes'

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true
}))

import { db } from '../app/models'

db.sequelize.sync()

app.use('/api/notes', routes)

const port = process.env.PORT || 5001

app.listen(port, () => {
    console.info(`server started on port ${port}`) // eslint-disable-line no-console
})