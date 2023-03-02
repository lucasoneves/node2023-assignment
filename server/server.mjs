import bodyParser from 'body-parser'
import express from 'express'
import morgan from 'morgan'

const app = express()

const port = 8000

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(morgan('dev'))

const db = []

app.post('/todo', (req, res, next) => {
  const data = {
    id: Date.now(),
    text: req.body.text
  }

  db.push(data)
  res.status(201).json(data)
})

app.get('/todo', (req, res, next) => {
  res.json(db);
})

app.listen(port, () => {
  console.log(`Server on http://localhost:${port}`)
})