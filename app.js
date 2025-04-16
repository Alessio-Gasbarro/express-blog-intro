//Import expressJS to app.js
const express = require('express');
const { title } = require('process');

//Function assigned variable = app
const app = express();

//Base port set to 3000
const port = 3000;

//Base "Rotta"
app.get('/', (req, res) => {
    res.send('<h1>Server del mio blog<h1>');
});

//Open port and server in stand-by
app.listen(port, () => {
    console.log(`Server in ascolto alla porta ${port}`);
});

const dolciblog = [
    {
        title: "Ciambellone",
        content: "Torta rotonda, come una ciambella!",
        img: "<img src=./images/ciambellone.jpeg>",
        tags: ["Tag1", "Tag2", "Tag3"],
    },
    {
        title: "Cracker Barbabietola",
        content: "Non so cosa sia questo orrore.",
        img: "<img src=./images/cracker_barbabietola.jpeg>",
        tags: ["Tag1", "Tag2", "Tag3"],
    },
    {
        title: "Pane Fritto dolce",
        content: "Praticamente le pettole pugliesi!",
        img: "<img src=./images/pane_fritto_dolce.jpeg>",
        tags: ["Tag1", "Tag2", "Tag3"],
    },
    {
        title: "Pasta Barbabietola",
        content: "Stessa cosa dei cracker ma bolliti! (Scherzo)",
        img: "<img src=./images/pasta_barbabietola.jpeg>",
        tags: ["Tag1", "Tag2", "Tag3"],
    },
    {
        title: "Torta Paesana",
        content: "Torta al gusto di torta, ma più buona!",
        img: "<img src=./images/torta_paesana.jpeg>",
        tags: ["Tag1", "Tag2", "Tag3"],
    },
];
