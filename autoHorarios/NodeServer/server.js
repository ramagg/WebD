// B: https://medium.freecodecamp.org/building-a-simple-node-js-api-in-under-30-minutes-a07ea9e390d2
const express = require('express')
const MongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser')
const db = require('./config/db')

const port = 8000

const app = express()

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json());
// Static files
app.use('/', express.static(__dirname + '/public'));

MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err)

  require('./app/routes')(app, database);

  app.listen(port, ()=>{
    console.log('All good server is at: localhost:' + port)
  })
})