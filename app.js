//Import expressJS to app.js
const express = require('express');

//Function assigned variable = app
const app = express();

//Base port set to 3000
const port = 3000;

//Base "Rotta"
app.get('/', (req, res) => {
    res.send('Server del mio blog');
});

//Open port and server in stand-by
app.listen(port, () => {
    console.log(`Server in ascolto alla porta ${port}`);
});