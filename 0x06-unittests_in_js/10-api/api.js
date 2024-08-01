const express = require('express');

const app = express();
const PORT = 7865;

app.use(express.json())


app.get('/', (req, res) => {
  res.status(200).send('Welcome to the payment system');
})

app.get('/cart/:id(\\d+)', (req, res) => {
  const { id } = req.params;
  res.status(200).send(`Payment methods for cart ${id}`);
})

app.get('/available_payments', (req, res) => {
  res.status(200).send({payment_methods:{credit_cards: true, paypal:false}});
})

app.post('/login', (req, res) => {
  let username = '';
  if (req.body) {
    username = req.body.userName;
  }
    res.status(200).send(`Welcome ${username}`);
})

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});


module.exports = app;
