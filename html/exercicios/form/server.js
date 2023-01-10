const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }))

app.post('/usuarios', (req, resp) => {
  console.log(req.body)
  resp.json({
    "message":"Funcionou"
  })
})

app.post('/usuarios/:id', (req, resp) => {
  console.log(req.body)
  console.log(req.params.id)
  resp.json({
    "message":"Id incluído"
  })
})

app.listen(3003)