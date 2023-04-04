const express = require('express');
const { Storage } = require('megajs')

const app = express();

app.get('/', (req, res) => {
  res.send("API IS AWAKE, WAITING FOR REQUESTS")
});

app.get('/check', (req, res) => {
  const storage = new Storage({
    email: 'developeracc2004@gmail.com',
    password: 'petty2301',
    userAgent: 'ExampleClient/1.0'
  })

  storage.once('ready', () => {
    // User is now logged in
    res.send("valid")
  })
  
  storage.once('error', error => {
    // Some error happened
    res.send("invalid")
  })
});

app.listen(5050, () => {
  console.log('server started');
});
