require('dotenv').config()

//db connection import occurs after dotenv so module can access process.env object with populated key/value pairs
require('./config/database')

const express = require('express')
const Grow = require('./models/grow')

const cors = require('cors')
const morgan = require('morgan')

///////////////////////////////
// APP CONFIG
////////////////////////////////
const { PORT } = process.env

const app = express()

///////////////////////////////
// MIDDLEWARE
////////////////////////////////

// mount express urlencoded - body parser - x-www-urlencoded data (process data from form submission)

app.use(express.urlencoded({extended: true}))
// mount express JSON body parser
app.use(express.json()) // look for a request 'Content-Type' - 'application/json' -> req.body ({...} or [{...}, {...}])


app.use(cors())

app.use(morgan('dev'))
// app.use('/people', peopleRouter)

app.get('/', (req,res)=>{
    res.send('hello world')
})

app.post('/grow', async (req, res) => {
  const type = req.body.type;
  const weight = req.body.weight;
  const substrate = req.body.substrate;
  const yield = req.body.yield;
  const notes = req.body.notes;
  const entryId = req.body.entryId;


  const grow = await Grow.create({
    type: type,
    weight: weight,
    substrate: substrate,
    yield: yield,
    notes: notes,
    entryId: entryId
  })

  res.json({ grow: grow })
})

app.listen(PORT, ()=>console.log(`Listening on port: ${PORT}`))