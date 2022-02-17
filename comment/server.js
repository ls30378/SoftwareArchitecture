require('dotenv').config()
const cors = require('cors')
const express = require('express')

const app = express()

const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL)
console.log('started')

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to database'))

app.use(express.json())

const commentRouter = require('./routes/comment')
app.use('/comment', commentRouter)

app.listen(4000, '0.0.0.0', () => console.log('Server Started'))

