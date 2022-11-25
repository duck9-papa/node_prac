const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req, res) {
  res.send('Hello World')
  console.log(req)
})

app.get('/about', function (req, res) {
  res.send('about')
})

app.listen(port,()=>{
  console.log(`example port ${port}`)
})