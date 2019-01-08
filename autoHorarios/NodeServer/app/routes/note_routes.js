// Routes file
let ObjectID = require('mongodb').ObjectID
// Example of a route that has to be wrappted in a function
// and takes the express instance and the database arguments


module.exports = function(app, db){
  // All Materias

  app.get('/materias/all', (req, res) => {
      db.collection('Materias').find({}).toArray((err, items)=>{
        if (err) throw err;
        res.send(items)
      })
    })
  // All hours
  app.get('/horarios/all', (req, res) => {
    db.collection('horarios').find({}).toArray((err, items)=>{
      if (err) throw err;
      res.send(items)
    })
  })

  // lectures request
  app.post('/lectures', (req, res) => {
    // Here is where is going to create the note/thing in the database
    // const note = { text: req.body.body, title: req.body.title }
    console.log(req.body)
    res.send(req.body)
  })


  // ---- Tutorial ----
  // Read route
  app.get('/notes/:id', (req, res) => {
    const id = req.params.id
    
    const details = {'_id': new ObjectID(id)}
    db.collection('notes').findOne(details, (err, item) => {
      if (err) {
        res.send({'error': 'An error has occurred'})
      } else {
        res.send(item)
      }
    })
  })
  // Create route
  app.post('/notes', (req, res) => {
    // Here is where is going to create the note/thing in the database
    const note = { text: req.body.body, title: req.body.title }
    
    db.collection('notes').insert(note, (err, result) => {
      if (err){
        res.send({'error': 'An error has occurred'})
      } else {
        res.send(result.ops[0])
      }
    })
  })
  // Delete route
  app.delete('/notes/:id', (req, res)=> {
    const id = req.params.id
    const details = { '_id': new ObjectID(id) }
    db.collection('notes').remove(details, (err, item)=> {
      if (err) {
        res.send({ 'error': 'An error has occurred'})
      } else {
        res.send('Note ' + id + ' Deleted!')
      }
    })
  }) 
  // Update route
  app.put('/notes/:id', (req,res)=>{
    const id = req.params.id
    const details = { '_id': new ObjectID(id) }
    const note = { text: req.body.body, title: req.body.title }
    db.collection('notes').update(details, note, (err, result) => {
      if (err) {
        res.send({'error': 'An error has occurred'})
      } else {
        res.send(note)
      }
    })
  })
}