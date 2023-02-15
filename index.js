const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(require("./res/index.json"))
});

app.get('/tldr', (req, res) => {
  var id = req.query.id
  res.send('Hello Express app!' + id)

});

app.listen(5050, () => {
  console.log('server started');
});