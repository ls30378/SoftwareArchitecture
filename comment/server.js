require('dotenv').config()
const cors = require('cors')
const express = require('express')
const receiver = require('./received')

const app = express()
app.use(cors())
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL)
console.log('started')
// 
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to database'))

app.use(express.json())
receiver
const commentRouter = require('./routes/comment')
app.use('/api/comment', commentRouter)

app.listen(4000, () => console.log('Server Started'))

