// B: https://medium.freecodecamp.org/building-a-simple-node-js-api-in-under-30-minutes-a07ea9e390d2
const express = require('express')
const MongoClient = require('mongodb').MongoClient
const bodyPareser = require('body-parser')
const db = require('./config/db')

const port = 8000

const app = express()

app.use(bodyPareser.urlencoded({ extended: true}))
app.use('/static', express.static(__dirname + '/public'));

MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err)

  require('./app/routes')(app, database);

  app.listen(port, ()=>{
    console.log('Todo bien ' + port)
  })
})