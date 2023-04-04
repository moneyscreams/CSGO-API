const express = require('express');
const { Storage } = require('megajs')

const app = express();

app.get('/', (req, res) => {
  res.send("API IS AWAKE, WAITING FOR REQUESTS")
});

app.get('/check', (req, res) => {
  var id = req.query.id
  res.send('Hello Express app!' + id)

});

app.listen(5050, () => {
  console.log('server started');
});
