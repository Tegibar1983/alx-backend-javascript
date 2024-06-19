const express = require('express');

const app = express();
const PORT = 7865;


app.get('/', (_, res) => {
	  res.send('Welcome to the payment system');
});

app.listen(PORT, () => {
	  res.send('Welcome to the payment system');
});

module.expqorts = app;
