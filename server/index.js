import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import router from './routers/posts.js'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000
const URI = process.env.DATABASE_URL

app.use(cors())
app.use(bodyParser.json({ limit: '30mb' }))
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }))

// http://localhost:5000/posts
app.use('/posts', router)

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to DB')
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  })
  .catch(err => {
    console.log('err', err)
  })
